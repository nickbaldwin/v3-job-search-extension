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
            // @ts-expect-error efef
            <td> {result[p]} </td>
        ))}
    </tr>
);
