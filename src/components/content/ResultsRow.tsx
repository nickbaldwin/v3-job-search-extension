import { DisplayJob } from '../../schema/transform.ts';

export const ResultRow = ({
    result,
    pos,
}: {
    result: DisplayJob;
    pos: number;
}) => (
    <div key={result.jobId}>
        <p>
            {pos} - {result.title} - {result.company}
        </p>
    </div>
);
