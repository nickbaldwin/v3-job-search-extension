import { expect, test } from 'vitest';
import { sampleImpressionUrl } from './impressionUrl.ts';
import {  getDataFromUrl } from './helpers.ts';


test('can decode valid impression url', () => {
    const data = getDataFromUrl(sampleImpressionUrl)
    expect(data).toMatchObject({
        adRank: '2',
        auctionBids: '41',
        campaignId: "32069513",
        data:  {
            at: 162,
            av: 1626521,
            ba: 41,
            bi: 1,
            bt: 0,
            ch: 50475,
            ck:  {},
            cm: 32069513,
            cr: 48240882,
            dg: 35.577999999999996,
            di: "bad9ccdb89544d00b4011f083bdd66fa",
            dj: 2,
            dm: 3,
            dn: 35.577999999999996,
            dp: 35.577999999999996,
            ec: 41.71536,
            ep: null,
            fc: 73569994,
            fl: 65679632,
            fq: 0,
            gC: true,
            gc: true,
            gm: 0,
            gs: "none",
            ii: "c0c9ca748f19425abdb1a959a0cd7460",
            ip: "107.22.251.215",
            nw: 10515,
            pc: 1.18,
            pn: "monster:JSR_SPLIT_VIEW",
            pr: 217913,
            rs: 500,
            rt: 3,
            sa: "undefined",
            sb: "i-0f2e7aae3c11e1515",
            sp: 3834789,
            st: 1129712,
            ts: 1633158609228,
            tz: "UTC",
            uk: "1a1ea79f-affa-4c0f-b580-773b31848e89",
            v: "1.9",
        },
        decisionId: "bad9ccdb89544d00b4011f083bdd66fa",
        decisionIndex: '2',
        ecpm: "41.71536",
        price: "1.18",
        relevanceScore: '500',
        remainder: "",
    });
});


test('empty string returns error property', () => {
    const data = getDataFromUrl('')
    expect(data).toMatchObject({error: 'no url'});
});

test('invalid string returns error property', () => {
    const data = getDataFromUrl('3w')
    expect(data).toMatchObject({error: 'unknown'});
});