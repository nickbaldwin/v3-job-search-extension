import { expect, test } from 'vitest';
import { transformJob, transformJobs, blankJob } from './transform.ts';
import job from './sampleJob.json';

test.skip('transformed job has correct properties', () => {
    expect(transformJob(job, 0)).toMatchObject({
        jobId: '57452e3c-5ec3-41eb-a667-b7a0dc109ff3',
        title: 'Senior Software Engineer, Full Stack (TypeScript, React, Node, AWS)',
        company: 'Capital One',
    });
});
test.skip('transformed job has expected properties', () => {
    expect(transformJob(job, 0)).toHaveProperty('description');
    expect(transformJob(job, 1)).toHaveProperty('ecpm');
    expect(transformJob(job, 2)).toHaveProperty('position');
});

test.skip('transformer returns blank on error', () => {
    expect(transformJob({ missing: 'lots' }, 0)).toBe(blankJob);
});

test.skip('transform jobs works', () => {
    const tj = transformJob(job, 0);
    expect(
        transformJobs([{ blah: 'lots' }, job, { blah: 'more' }])
    ).toStrictEqual([blankJob, tj, blankJob]);
});

// todo - check all properties
// todo - check transforms correct
