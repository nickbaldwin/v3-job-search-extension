import { DisplayJob } from '../../schema/transform.ts';

export const ResultRow = ({
    result,
    propertiesToDisplay,
}: {
    result: DisplayJob;
    propertiesToDisplay: string[];
}) => (
    <tr key={result.jobId}>
        {propertiesToDisplay.map((p) => (
            <td> {result[p]} </td>
        ))}
    </tr>
);
