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

