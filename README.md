# fol-news-site
The first part of the migration away from Expression Engine CMS to AngularJS/Wordpress.

(Where '$' assume command is on CLI).

Dependencies required to get working:
NodeJS (npm) - http://nodejs.org/
Bower - http://bower.io/
Ruby - https://www.ruby-lang.org/en/
Compass - http://compass-style.org/

To get started on development, run the following from the command line:
$ npm install
$ bower install
$ grunt serve

To release (assuming you're releasing from your local environment and you've installed/ran all other steps - except `grunt serve`):
$ grunt build
