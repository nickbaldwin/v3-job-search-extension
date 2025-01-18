import { parseJob } from './jobSchema.ts';
import { Job } from './jobSchema.ts';

// todo
export interface DisplayJob {
    position: string;
    adRank: string;
    remainder: string;
    relevanceScore: number;
    ecpm: number;
    price: number;
    campaignId: string;
    adProvider: string;
    searchEngine: string;
    company: string;
    title: string;
    description: string;
    location: string;
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
    remote: string;
    decisionId: string;
    url: string;
    selected: string;
    data: Job | null;
    kevelData: object | null;
}

export const blankJob: DisplayJob = {
    adProvider: '',
    adRank: '',
    applyType: '',
    campaignId: '',
    data: null,
    dateRecency: '',
    decisionId: '',
    ecpm: 0,
    formattedDate: '',
    ingestionMethod: '',
    kevelData: null,
    mesco: '',
    nowId: '',
    position: '',
    price: 0,
    pricingType: '',
    provider: '',
    providerCode: '',
    providerJobId: '',
    refCode: '',
    relevanceScore: 0,
    remainder: '',
    remote: '',
    searchEngine: '',
    selected: '',
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
};

// todo - use Job type
export const transformJob = (job: object): DisplayJob => {
    const parsed = parseJob(job);

    console.log('parsed', parsed);
    if (parsed.success) {
        const {
            jobPosting,
            normalizedJobPosting,
            now = {
                jobAdPricingTypeId: '',
            },
            jobId = '',
            provider = {
                code: '',
                name: '',
            },
            status = '',
            jobStatus = '',
            ingestionMethod = '',
            apply,
            jobAd,
        } = parsed.data;
        const {
            title = '',
            description = '',
            hiringOrganization = { name: '' },
            jobLocation,
            // datePosted,
        } = jobPosting;
        const { applyType = '' } = apply;
        const { name = '', code = '' } = provider;
        // todo - deal with position etc
        // todo - deal with kevel data etc
        return {
            adProvider: '',
            adRank: '',
            applyType,
            campaignId: '',
            data: null,
            dateRecency: '',
            decisionId: '',
            ecpm: 0,
            formattedDate: '',
            ingestionMethod,
            kevelData: null,
            mesco: '',
            nowId: '',
            position: '',
            price: 0,
            pricingType: '',
            provider: name,
            providerCode: code,
            providerJobId: '',
            refCode: '',
            relevanceScore: 0,
            remainder: '',
            remote: '',
            searchEngine: '',
            selected: '',
            seoJobId: '',
            template: '',
            url: '',
            validThrough: '',
            validThroughGoogle: '',
            xCode: '',
            title,
            description,
            company: hiringOrganization?.name || '',
            location: jobLocation?.[0]?.address?.addressLocality || '',
            // datePosted: datePosted,
            jobId: jobId,
        };
    } else {
        // todo deal with error
        parsed.error.issues.forEach((issue) => {
            console.log('\n\n\n', issue, '\n\n\n');
        });
        return blankJob;
    }
};

export const transformJobs = (jobs: object[]): DisplayJob[] => {
    if (!jobs || jobs.length === 0) {
        return [];
    }
    return jobs.map(transformJob);
};
