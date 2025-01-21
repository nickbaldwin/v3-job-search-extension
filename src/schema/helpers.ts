export const getImpressionData = (impressionUrl: string) => {
    return impressionUrl;
};

export const formatLocationType = (obj: object ) => {
    // @ts-ignore
    return obj?.name || "";
}

export const normalizePostLocation = (locations: object[]): string => {
    // @ts-ignore
    if (!locations || locations.length === 0 ) {
        return '';
    }

    let loc = '';
    // @ts-ignore
    locations.forEach((a: object) => {
        // @ts-ignore
        let add = a?.address;
        if (add) {
            // @ts-ignore
            // loc += add.addressLocality + ", " + add.addressRegion + ", " + add.postalCode + ", " + add.addressCountry + ". ";

            let thisLoc = [add.addressLocality, add.addressRegion, add.postalCode,add.addressCountry].filter(Boolean).join(", ");
            if (thisLoc) {
                thisLoc.concat('.');
                loc += thisLoc + '. ';
            }
        }

    });

    return loc;
}


export const formatDate = (date: string): string => {
    if (!date || date === '') {
        return '';
    }
    // let d = dayjs(date).format('D MMM YY');
    return date;
};



export const nowAdIds = (object: object[]): string => {

    if (!object || object.length === 0) {
        return "";
    }
    return object
        // @ts-ignore
        .filter( (identity: object) => identity?.identifierName === 'POSITION_AD_ID')
        // @ts-ignore
        .map((identity: object) =>  identity.identifierValue)
        // @ts-ignore
        .join(", ") || "";
}




// base64 character set, plus padding character (=)
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    // Regular expression to check formal correctness of base64 encoded strings

    b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;


const atobPollyfill = function(string: string) {
    // atob can work with strings with whitespaces, even inside the encoded part,
    // but only \t, \n, \f, \r and ' ', which can be stripped.
    string = String(string).replace(/[\t\n\f\r ]+/g, "");

    if (!b64re.test(string))
        throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");


    // Adding the padding if missing, for semplicity
    string += "==".slice(2 - (string.length & 3));
    let bitmap, result = "", r1, r2, i = 0;
    for (; i < string.length;) {
        bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12
            | (r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)));

        result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255)
            : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255)
                : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
};


export type KevelData = {
    adRank?: string,
    auctionBids?: string,
    campaignId?: string,
    data?:  object,
    decisionId?: string,
    decisionIndex?: string,
    ecpm?: string,
    price?: string,
    relevanceScore?: string,
    remainder?: string,
    error?: string
}

export const getDataFromUrl = (url: string): KevelData => {
    if (!url) {
        return { error: 'no url' };
    }
    const match = url.match(/(?:http(?:s)?):\/\/(?:www\.)?(?:prod|preprod|dev)?.monsterview.com\/i.gif\?e=([-a-zA-Z0-9]*)&s=([\s\S]*)/);
    if (match && match[1]) {
        try {
            const d = atobPollyfill(match[1]);
            const u = JSON.parse(d);
            const { ba, di, dj, pc, ec, rr, rs, cm } = u;

            return {
                decisionId: "" + di,
                decisionIndex:  '' + dj,
                adRank:  '' + dj, // same
                price: "" + pc,
                ecpm: "" + ec,
                remainder: rr?  "Y" : "",
                campaignId: "" + cm,
                relevanceScore: '' + rs,
                auctionBids: '' + ba,
                data: u
            };

        } catch {
            console.log('problem with impression url', url);
            return { error: 'cannot decode url' };
        }
    }
    else return { error: 'unknown' };
}


export const getKevelData = (impressionUrl: string) => {

    const kevelData = getDataFromUrl(impressionUrl);
    if (kevelData.error) {
        return {};
    }
    return kevelData;
}



export const getProviderJobId =  (arr: object[])  =>  {
    if (!arr || arr.length === 0) {
        return '';
    }
    let temp = arr.filter((el) => {
        // @ts-ignore
        return el.identifierName === 'PROVIDER_JOB_ID';
    });
    if (!temp || temp.length === 0) {
        return "";
    }
    return temp.map((el) => {
        // @ts-ignore
        return el.identifierValue + " ";
    }) || "";
};