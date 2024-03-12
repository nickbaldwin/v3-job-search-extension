import { expect, test } from 'vitest';
import { transformJob } from './transform.ts';
import job from './sampleJob.json';

test('transformed job has correct properties', () => {
    expect(transformJob(job)).toMatchObject({
        jobId: '57452e3c-5ec3-41eb-a667-b7a0dc109ff3',
        title: 'Senior Software Engineer, Full Stack (TypeScript, React, Node, AWS)',
        company: 'Capital One',
    });
});
test('transformed job has expected properties', () => {
    expect(transformJob(job)).toHaveProperty('description');
    expect(transformJob(job)).toHaveProperty('ecpm');
    expect(transformJob(job)).toHaveProperty('position');
});

test('transformer returns null on error', () => {
    // @ts-expect-error deliberate
    expect(transformJob({ missing: 'lots' })).toBe(null);
});

// todo - check all properties
// todo - check transforms correct
