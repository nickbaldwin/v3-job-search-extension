import { DisplayJob } from '../../schema/transform.ts';
import { ResultRow } from './ResultsRow.tsx';

export const ResultsTable = ({ results }: { results: DisplayJob[] }) => {
    return results.map((r: DisplayJob, pos: number) => {
        return <ResultRow pos={pos} result={r} />;
    });
};
