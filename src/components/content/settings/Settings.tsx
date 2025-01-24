import useStore from '../../../store/store.ts';

import { getNamesOfFields } from '../../../schema/settings.ts';

export const Settings = () => {
    const bears = useStore((state) => state.bears);
    const settings = useStore((state) => state.settings);
    const inc = useStore((state) => state.increase);

    return (
        <>
            <p>There are {bears} bears!</p>
            <button onClick={() => inc(1)}>add a bear</button>
            < br />< br />
            {getNamesOfFields().map((s) => (
                <>
                    <p>{settings[s].title}: {settings[s].visible ? 'visible' : 'hidden'}</p>
                </>
            ))}
        </>
    );
};
