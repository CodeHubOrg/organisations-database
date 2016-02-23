#CodeHub Organisations Database project

## Getting started

* You'll need a recent copy of node from: https://nodejs.org/
* Run: `npm install` to install express and other dependencies.

**Recent updates**

There are now three scripts you can run: 
* `npm run build` generates a `bundle.js` from the React and Flux files; this is saved to the `public` directory and will be loaded by the `index.html` file
* `npm start` runs a server through express, and the app will run in the browser on http://localhost:3000
* Alternatively you can run a webpack dev server with `npm run dev-start`; this lets you edit React components and css with automatic browser refresh; visit http://localhost:8080 to see the dev site in the browser; if you change styles in the `app/css/main.css` file or in one of the React components and save, the browser should automatically refresh with the changes in place 

Folder structure: 
- I created a directory `app` that contains the React components and Flux files, including Dispatcher and Microevent library (previously in `public`)
- The `public` directory now contains only the `index.html` file (moved from root), the generated `bundle.js` file and a css file

There is a new index.jsx file which serves as the entry point for web pack to bundle up the various components. These are modularised now, so that dependencies can be directly required. 

**Contributors**

Katja Durrani
Paul Grimshaw
Michael Gray
