import useStore from '../../../store/store.ts';

export const Settings = () => {
    const bears = useStore((state) => state.bears);
    const inc = useStore((state) => state.increase);

    return (
        <>
            <p>There are {bears} bears!</p>
            <button onClick={() => inc(1)}>add a bear</button>
        </>
    );
};
