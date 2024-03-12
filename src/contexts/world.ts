import { helper } from '../helpers/helper.ts';
import { log } from '../utils/logger.ts';

const moduleName = 'world script';
log({ logType: 'info', moduleName, message: 'loaded' });

console.log(helper());

const sendResults = () => {
    log({
        logType: 'info',
        moduleName,
        fn: 'sendResults',
        // @ts-expect-error added to window by SVX
        payload: window.searchResults,
    });

    window.postMessage(
        {
            type: 'results',
            // @ts-expect-error added to window by SVX
            payload: window.searchResults,
            source: 'content',
        },
        '*'
    );
};

const poller: number = setInterval((): void => {
    log({ logType: 'info', moduleName, message: 'polling...' });
    const cards = document.querySelector('.infinite-scroll-component');

    // todo ? - deal with both being present, and switching layout?
    const cardList = document.querySelector('#JobCardGrid>ul');

    if (cards !== null && cardList !== null) {
        log({ logType: 'info', moduleName, message: 'clear polling...' });
        clearInterval(poller);

        log({
            logType: 'INFO',
            moduleName,
            fn: 'poller',
            message: 'setting up observer',
            payload: cardList,
        });

        // monitor updates to card list and listen for mouse hovers
        const resultsObserver = new MutationObserver(() => {
            log({
                logType: 'INFO',
                moduleName,
                fn: 'resultsObserver',
                message: 'mutations... will send results',
                // payload: mutations,
            });
            sendResults();
        });
        resultsObserver.observe(cardList, {
            childList: true,
        });
    }
}, 300);
