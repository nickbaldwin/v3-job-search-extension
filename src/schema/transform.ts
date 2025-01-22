import { parseJob } from './jobSchema.ts';





// todo - move interface or dynamically construct it
export interface DisplayJob {

    title: string;
    description: string;
    location: string;
    remote: string;
    company: string;
    nowId: string;
    jobId: string;
    template: string;
    xCode: string;
    applyType: string;
    formattedDate: string;
    mesco: string;
    provider: string;
    providerCode: string;
    providerJobId: string;
    dateRecency: string;
    ingestionMethod: string;
    pricingType: string;
    seoJobId: string;
    refCode: string;
    validThrough: string;
    validThroughGoogle: string;
    url: string;
    jobType: string;

    data: object | null;
    kevelData: object | null;

    decisionId: string;
    adProvider: string;
    searchEngine: string;

    position: string;
    selected: boolean;

    adRank: string;
    remainder: string;
    auctionBids: string;
    relevanceScore: string;
    ecpm: string;
    price: string;
    campaignId: string;
}


// todo - remove or move into test data
export const blankJob: DisplayJob = {
    adProvider: '',
    adRank: '',
    applyType: '',
    campaignId: '',
    data: null,
    dateRecency: '',
    decisionId: '',
    ecpm: '0',
    formattedDate: '',
    ingestionMethod: '',
    kevelData: null,
    mesco: '',
    nowId: '',
    position: '',
    price: '0',
    pricingType: '',
    provider: '',
    providerCode: '',
    providerJobId: '',
    refCode: '',
    relevanceScore: '0',
    remainder: '',
    auctionBids: '',
    remote: '',
    searchEngine: '',
    selected: false,
    seoJobId: '',
    template: '',
    url: '',
    validThrough: '',
    validThroughGoogle: '',
    xCode: '',
    title: '',
    description: '',
    company: '',
    location: '',
    // datePosted: datePosted,
    jobId: '',
    jobType: ''
};

// todo - use Job type

// @ts-expect-error todo
export const transformJob = (job: object, position: number): DisplayJob => {
    const parsed = parseJob(job);
    console.log('parsed', parsed);
    if (parsed.success  && parsed.data) {
        // todo - deal with position etc
        return parsed.data;
    } else if (!parsed.success) {
        // todo deal with error
        /*
        parsed.error.issues.forEach((issue) => {
            console.log('\n\n\n', issue, '\n\n\n');
        });
         */
        return blankJob;
    }
};

export const transformJobs = (jobs: object[]): DisplayJob[] => {
    if (!jobs || jobs.length === 0) {
        return [];
    }
    return jobs.map(transformJob);
};
