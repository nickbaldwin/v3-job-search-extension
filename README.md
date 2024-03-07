# V3 Job Search Extension

## What is a Chrome extension?
Chrome extensions are made up of four types of components: 

- #### Manifest (mandatory)
  This JSON file defines configuration and specifies important metadata for the extension including name and version along with its components (see below) and permissions etc.

- #### Service worker(s)
  This script* runs in the background and can listen to browser-related events and has access to Chrome APIs.

- #### Content script(s)
  This JavaScript file is injected into the context of a web page. It can read and modify the DOM of the pages, although it operates in an isolated context*, but also has access to Chrome APIs.

- #### Popup and other pages
  A popup page can be displayed when the user clicks the extension icon. An extension can also include other HTML files such as an options page, or other arbitrary HTML pages though.

Note: while this is the general or typical approach there are some other options such as injecting code into a script tag in the page itself, executing a content script in the 'main' context (without Chrome APIs), programmatically injecting a content script, creating a service worker within a html page etc. 

## What does this extension do?

This extension provides more information about the jobs appearing within the Monster job search results page, and about the factors that determine their position within the results.


## How does it work?

RTFM

// todo - link to 

## How is it developed?

This extension is developed in React and TypeScript, and uses Vite as the build tool. It also uses the CRXJS Vite plugin to simplify the development/build process for extensions (particularly HMR or Hot Module Replacement).


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
