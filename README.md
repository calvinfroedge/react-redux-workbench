# Motivation

This project was borne out of the need to quickly spin up a new environment for authoring React + Redux components.

The hope is that you can essentially run `npm install && npm run development` and have a work panel with hot reloading for building your component interactively.

`react`, `webpack`, and `redux` are all used. Running `npm run development` starts a webpack dev server, and you can get to work building out your component!

When you're ready to run tests, you can run `npm test`.

If you want to customize the project to point at your github / npm repo, just customize this readme, and run...

```js
PROJECT_NAME=foo-bar GITHUB_USERNAME=foo AUTHOR_NAME="Calvin Froedge" AUTHOR_EMAIL=calvinfroedge@gmail.com npm run customize
``` 
