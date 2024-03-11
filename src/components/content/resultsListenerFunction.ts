import { useStore } from '../../store/store.ts';
import {
    MessageType,
    subscribeToWindowMessages,
} from '../../utils/messaging.ts';

import { log } from '../../utils/logger.ts';
const moduleName = 'resultsListener function';

const setResults = useStore.getState().setResults;
export const ListenerFunction = () => {
    console.log('listener function');
    const messageHandler = (event: MessageEvent<MessageType>) => {
        log({
            logType: 'info',
            moduleName,
            message: 'event received',
            payload: event?.data,
        });

        if (event.data?.type === 'results') {
            // @ts-expect-error todo need to to add type
            const n = event?.data?.payload?.jobResults?.length || 0;
            setResults(n);
        } else {
            //
        }
    };

    subscribeToWindowMessages(messageHandler);
};
