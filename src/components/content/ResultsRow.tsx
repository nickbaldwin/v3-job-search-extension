import { DisplayJob } from '../../schema/transform.ts';

export const ResultRow = ({
    result,
    pos,
    propertiesToDisplay,
}: {
    result: DisplayJob;
    pos: number;
    propertiesToDisplay: string[];
}) => (
    <tr key={result.jobId}>
        {propertiesToDisplay.map((p) => (
            <td> {result[p]} </td>
        ))}
    </tr>
);
