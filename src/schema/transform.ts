import { parseJob } from './jobSchema.ts';
import { Job } from './jobSchema.ts';

// todo
interface DisplayJob {
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

    // todo
    data: Job | null;
    kevelData: object | null;
}

// todo - use Job type
export const transformJob = (job: Job): DisplayJob | null => {
    const parsed = parseJob(job);
    if (parsed.success) {
        const {
            jobPosting,
            // normalizedJobPosting,
            // now,
            jobId = '',
            // jobAd,
            // jobStatus,
        } = parsed.data;
        const {
            title = '',
            description = '',
            hiringOrganization = { name: '' },
            jobLocation,
            // datePosted,
        } = jobPosting;
        // todo - deal with position etc
        // todo - deal with kevel data etc
        return {
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
            title,
            description,
            company: hiringOrganization?.name,
            location: jobLocation?.[0]?.address?.addressLocality || '',
            // datePosted: datePosted,
            jobId: jobId,
        };
    } else {
        // todo deal with error
        return null;
    }
};
