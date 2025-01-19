import { DisplayJob, blankJob } from '../../schema/transform.ts';
import { ResultRow } from './ResultsRow.tsx';
import { Job } from '../../schema/jobSchema.ts';

const p = [
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
    'location',
    'nowId',
    'jobId',
    'template',
    'xCode',
    'applyType',
    'formattedDate',
    'mesco',
    'provider',
    'providerCode',
    'providerJobId',
    'dateRecency',
    'ingestionMethod',
    'pricingType',
    ' seoJobId',
    'refCode',
    'validThrough',
    'remote',
    'decisionId',
    'url',
    'selected',
    'data',
    'kevelData',
];

export const ResultsTable = ({ results }: { results: DisplayJob[] }) => {
    // const propertiesToDisplay = Object.keys(blankJob);
    const propertiesToDisplay = p;

    return (
        <table>
            <thead>
                {propertiesToDisplay.map((i) => (
                    <th> {i} </th>
                ))}
            </thead>
            <tbody>
                {results.map((r: DisplayJob, pos: number) => (
                    <ResultRow
                        result={r}
                        propertiesToDisplay={propertiesToDisplay}
                    />
                ))}
            </tbody>
        </table>
    );
};
