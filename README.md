# AngularJS Migration Workshop

This the sample project used in the workshop by [Asim Hussain](http://twitter.com/jawache) from [codecraft.tv](codecraft.tv) on _Migrating from AngularJS_

## Setup

The project is bootstrapped using npm but at the same time since this is a use case of migrating an old AngularJS project created some time ago we use bower to install the dependencies since that was the norm until a few years ago.

`npm run setup`

## Running

We have a simple server side which we run using 

`npm run server` - this runs a json-server and refreshes the data bases on each run so the deleted contacts will appear again.

To run the application we type

`npm start` - this loads the application using a local webserver, check the console for the port number to use.

The application is a simple contacts application where you can search, create or edit a contact.

# Steps for Migration.

Preparing for migration:

STEP 1:

Follow the step 1 of angular style guide https://github.com/johnpapa/angular-styleguide

Single Responsibility: Organize the code in such a maner that 1 file contains only one component.

STEP 2:

Move all the dependencies from bower to npm with approprate npm naming and version in package.json and run npm install.

Convert all the JS files to TS files.
Add index.ts files in each directory importing all the entities.

install following dev dependencies: rimraf, ts-loader, typescript, webpack, @types/angular
npm install rimraf ts-loader typescript webpack @types/angular --save-dev

run tsc --init in project dir to generate tsconfig.json file and set appropriate ts configuration options.

Create webpack.config.js file and configure webpack options accordingly.

add amin.ts file containing all the imports corresponding to the scripts in index.html file and remove scripts from index.html file.

add bundle.js file in script tag in index.html file.

add build script in package.json rimraf src/dist && webpack --bail --progress --profile

run build scipt start the app and verify if everything works file.

optionally can add dist folders to .gitignore file.