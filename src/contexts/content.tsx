import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/content/App.tsx';

// @ts-expect-error compiler cannot interpret the module
// this is a workaround to import the module from the script without a crxjs loader
import mainWorld from './world.ts?script&module';

const script: HTMLScriptElement = document.createElement('script');
// eslint-disable-next-line no-undef
script.src = chrome.runtime.getURL(mainWorld);
script.type = 'module';
document.head.prepend(script);

const root: HTMLDivElement = document.createElement('div');
root.id = 'content-root';
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
