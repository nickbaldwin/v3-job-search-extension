import { helper } from '../helpers/helper.ts';
import { log } from '../utils/logger.ts';

const moduleName = 'world script';
log({ logType: 'info', moduleName, message: 'loaded' });

console.log(helper());

const poller: number = setInterval((): void => {
    // @ts-expect-error this property is added by SVX
    const results = window.searchResults || null;
    if (results) {
        clearInterval(poller);
    }

    log({ logType: 'info', moduleName, message: 'results', payload: results });

    window.postMessage(
        {
            type: 'results',
            payload: results,
            source: 'content',
        },
        '*'
    );
}, 1000);
