# Angular Rest App

A simple REST app built using Angular, Angular Material and the Angular CLI.

## Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Node.js v6.9+ and NPM v3.x – we recommend using [NVM (Linux/Mac)](https://github.com/creationix/nvm) or [NVM-Windows (Windows)](https://github.com/coreybutler/nvm-windows)
- Install Angular CLI via `npm install -g @angular/cli`

### Getting Started

There are two main parts to this application. The first is the REST API, for which we are using `json-server`. The second part is the Angular application server which we will start using `ng serve`.  

To get started run the commands below.

```bash
$ git clone https://github.com/onehungrymind/angular-rest-app.git
$ cd angular-rest-app
$ npm install
$ npm start
```

Then navigate to [http://localhost:4200](http://localhost:4200/#/items) in your browser.

> Note: the above terminal commands are for Mac. Remember to substitute the appropriate commands for your OS.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

