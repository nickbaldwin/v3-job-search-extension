import { helper } from '../helpers/helper.ts';
import { log } from '../utils/logger.ts';

const moduleName = 'world script';
log({ logType: 'info', moduleName, message: 'loaded' });

console.log(helper());

// const setBears = useStore.getState().setBears;

const sendResults = () => {
    log({
        logType: 'info',
        moduleName,
        message: 'results',
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
    const cardList = document.querySelector(
        "[class^='job-search-resultsstyle__CardGrid']"
    );

    if (cards !== null && cardList !== null) {
        log({ logType: 'info', moduleName, message: 'clear polling...' });
        clearInterval(poller);

        // monitor updates to card list and listen for mouse hovers

        log({
            logType: 'INFO',
            moduleName,
            message: 'setting up observer',
            payload: cardList,
        });
        const resultsObserver = new MutationObserver(() => {
            log({
                logType: 'INFO',
                moduleName,
                message: 'mutations...',
                // payload: mutations,
            });
            sendResults();
        });

        resultsObserver.observe(cardList, {
            childList: true,
            subtree: true, // report added/removed nodes
        });
    }
}, 1000);
