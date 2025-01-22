import { expect, test } from 'vitest';
import { getNamesOfAllProperties, getNamesOfFields } from './settings.ts';


test('getNamesOfFields - all fields that can be displayed in table', () => {
    const fields = getNamesOfFields();
    expect(fields).toEqual(
        expect.arrayContaining([
            'position',
            'adRank',
            'remainder',
            'relevanceScore',
            'ecpm',
            'price',
            'campaignId',
            'adProvider',
            'searchEngine',
            'company',
            'title',
            'description',
            'location',
            "formattedDate",
            "dateRecency",
            'nowId',
            'jobId',
            'template',
            'xCode',
            'applyType',
            'mesco',
            'provider',
            'providerCode',
            'providerJobId',
            'ingestionMethod',
            'jobType',
            'pricingType',
            'seoJobId',
            'refCode',
            'validThrough',
            'remote',
            'url',

            // 'selected',
            // 'data',
            // 'kevelData',
            // 'decisionId',
            // 'auctionBids'
        ])
    );
});



test('getNamesOfAllProperties all properties passed into ui', () => {
    const fields = getNamesOfAllProperties();
    expect(fields).toEqual(
        expect.arrayContaining([
            'position',
            'adRank',
            'remainder',
            'relevanceScore',
            'ecpm',
            'price',
            'campaignId',
            'adProvider',
            'searchEngine',
            'company',
            'title',
            'description',
            'location',
            "formattedDate",
            "dateRecency",
            'nowId',
            'jobId',
            'template',
            'xCode',
            'applyType',
            'mesco',
            'provider',
            'providerCode',
            'providerJobId',
            'ingestionMethod',
            'jobType',
            'pricingType',
            'seoJobId',
            'refCode',
            'validThrough',
            'remote',
            'url',

            'selected',
            'data',
            'kevelData',
            'decisionId',
            'auctionBids',
        ])
    );
});



