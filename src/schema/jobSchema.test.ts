import { expect, test } from 'vitest';
import { parseJob } from './jobSchema.ts';
import job from './sampleJob.json';

test('parsing fails if required properties not included', () => {
    expect(parseJob({ jobId: '1234' })).toMatchObject({ success: false });
});

test('parsing succeeds with sample job', () => {
    expect(parseJob(job)).toMatchObject({ success: true });
});

test('can test properties when parsing successful', () => {
    const j = parseJob(job);
    expect(j.success).toBe(true);
    if (j.success) {
        expect(j.data.jobId).toBe('57452e3c-5ec3-41eb-a667-b7a0dc109ff3');
    }
});
