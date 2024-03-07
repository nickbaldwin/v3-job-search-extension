import { helper } from '../helpers/helper.ts';

const hello = (): void => {
    console.log('hello from world in v3 world');
    console.log(helper());
};
hello();

const poller: number = setInterval((): void => {
    // @ts-expect-error this property is added by SVX
    const results = window.searchResults || null;
    if (results) {
        clearInterval(poller);
    }
    console.log('world - results: ', results);
}, 1000);

export default hello;
