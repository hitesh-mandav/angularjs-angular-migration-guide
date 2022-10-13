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

STEP 3:

upgrade angularjs version to lates version by updating the version number in package.json file. Run npm i then npm run build and start the app to verify if everything is working if there are any errors refer to angularjs change log to look for breaking anges and fix those.

STEP 4:

Componentify the angularjs version.

i.e : convert the controllers and directives i.e anything with a view to angularjs components.
remove the imports of controllers and directives from main.ts and add components import.
change the app.routes to refer to the new components.

STEP 5:

Mordernizing the angularjs app.
use arrow function, for of loops etc where ever possible. also replace dependencies of angularjs specific entities which are not supported by angular like $q, $resources with mordern promise and $http etc which will make the migration to angular easier

ST$EP 6:

Add target angular version dependencies and dev-dependecies to package.json. this can be obtained from a new angular project.

if there is error while npm i due to dependency mismatch then npm i --legacy-peer-deps can be tried or try to get compatible dependencies.

also add approprate @angular/upgrade dependency to package.json.

now it is important to remove ng-app from index.html as the app will be bootstraped via angular from main.ts

in main.ts declate the appmodule and the bootstrap the application via upgrade module manually.
