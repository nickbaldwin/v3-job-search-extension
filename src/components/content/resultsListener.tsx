import { useStore } from '../../store/store.ts';
import {
    MessageType,
    subscribeToWindowMessages,
} from '../../utils/messaging.ts';
import { useEffect } from 'react';
import { log } from '../../utils/logger.ts';

const moduleName = 'resultsListener';

export const Listener = () => {
    const setResults = useStore((state) => state.setResults);

    useEffect(() => {
        const messageHandler = (event: MessageEvent<MessageType>) => {
            log({
                logType: 'info',
                moduleName,
                message: 'event received',
                payload: event?.data,
            });

            if (event.data?.type === 'results') {
                // @ts-expect-error need to tadd type
                const n = event?.data?.payload?.totalSize || 0;
                setResults(n);
            } else {
                //
            }
        };
        subscribeToWindowMessages(messageHandler);
    }, [setResults]);

    return <></>;
};
