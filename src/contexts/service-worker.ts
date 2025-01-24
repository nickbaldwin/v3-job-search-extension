import { log } from '../utils/logger.ts';
import { MessageType, subscribeToExtensionMessages, sendMessageToContent } from '../utils/messaging.ts';

const moduleName = 'background service-worker script';
log({ logType: 'info', moduleName, message: 'loaded' });


const handleMessage = async (message: MessageType) => {
    log({ logType: 'MESSAGE_RECEIVED',  moduleName, payload: message });

    // todo
    if (message.type === "SAVED_SETTINGS_REQUEST") {
        sendMessageToContent({
            type: "SAVED_SETTINGS",
        });
    }

}

subscribeToExtensionMessages(handleMessage, moduleName);