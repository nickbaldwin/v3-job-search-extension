import { useStore } from '../../store/store.ts';

export const Results = () => {
    const results = useStore((state) => state.results);
    const bears = useStore((state) => state.bears);
    const inc = useStore((state) => state.increase);

    return (
        <>
            <p>There are {results} results</p>
            <p>But there are {bears} bears!</p>
            <button onClick={() => inc(1)}>add a bear</button>
        </>
    );
};
