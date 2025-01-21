import { expect, test } from 'vitest';
import { parseJob } from './jobSchema.ts';
import sampleJob from './sampleJob.json';

test('parsing fails if required properties not included', () => {
    expect(parseJob({ jobId: '1234' })).toMatchObject({ success: false });
});

test('parsing succeeds with sample job', () => {
    expect(parseJob(sampleJob)).toMatchObject({ success: true });
});

test('parsing successful with valid job', () => {
    const j = parseJob(sampleJob);
    expect(j.success).toBe(true);
});

test('can test properties when parsing successful', () => {
    const j = parseJob(sampleJob);
    expect(j.success).toBe(true);
    expect(j.data).toMatchObject({
        jobId: '2f12116d-328f-4d06-811a-adfc6fafede4',
        title: 'Software Engineer',
        company: 'Kforce Inc.',
    });
});


test('data property represents original job data', () => {
    const j = parseJob(sampleJob);
    expect(j.success).toBe(true);
    expect(j.data?.data).toMatchObject({
        jobId: '2f12116d-328f-4d06-811a-adfc6fafede4',
        jobPosting: expect.objectContaining({
            title: 'Software Engineer',
            hiringOrganization: expect.objectContaining({
                name: 'Kforce Inc.',
            })
        })
    });
});





test('all properties parsed successfully', () => {
    const j = parseJob(sampleJob);
    expect(j.success).toBe(true);
    expect(j.data).toMatchObject({
        title: 'Software Engineer',
        // description: '',
        location:  'Boston MA',
        remote: 'ONSITE',
        company: 'Kforce Inc.',
        nowId: '',
        jobId: '2f12116d-328f-4d06-811a-adfc6fafede4',
        template: '',
        xCode: '',
        applyType: 'OFFSITE',
        formattedDate: '2025-01-17T00:00:00',
        mesco: 'y',
        provider: 'kforce',
        providerCode: 'kforceftpin',
        providerJobId: 'kforce',
        dateRecency: '1 day ago',
        ingestionMethod: 'ADAPTED_NOW',
        pricingType: '2',
        seoJobId: 'software-engineer-boston-ma--2f12116d-328f-4d06-811a-adfc6fafede4',
        refCode: 'ITAQG2130005',
        validThrough: '2026-01-18T00:48:52.165Z',
        validThroughGoogle: '2026-01-18T00:48:52.165Z',
        url: 'https://www.monster.com/job-openings/software-engineer-boston-ma--2f12116d-328f-4d06-811a-adfc6fafede4?mstr_dist=true',
        jobType: 'PPC',

        // data: { x: 'x',},
        // kevelData: { x: 'x',},

        decisionId: '14ea9fd1effb4163b370aad55b9c2da8',
        adProvider: 'LEXEME',
        searchEngine: 'LEXEME_PAID',

        adRank: '0',
        remainder: '',
        auctionBids: '152',
        relevanceScore: '977',
        ecpm: '21.7224',
        price: '0.7',
        campaignId: '536670675',

        // todo - add here or pass in later?
        position: 'y',
        selected: false,
    });
});
