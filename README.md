# Modern Website Development

This package provides a modern and easy approach of an environment for frontend website development. It is based on common technologies, such as:

- [PHP](https://secure.php.net/)
- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)
- [NPM](https://www.npmjs.com/)
- [Gulp](http://gulpjs.com/)
- [Twig](http://twig.sensiolabs.org/)
- [FastRoute](https://github.com/nikic/FastRoute)
- [Browsersync](https://www.browsersync.io/)
- [gulp-sass](https://github.com/dlmanning/gulp-sass)
- [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
- [gulp-connect-php](https://github.com/micahblu/gulp-connect-php)
- [gulp-concat](https://github.com/contra/gulp-concat)

There are also some tools for user experience purposes embedded, like:

- [jQuery](https://jquery.com/)
- [Susy](http://susy.oddbird.net/)
- [Font Awesome](http://fontawesome.io/)

Please note that this package is not prepared for production yet. For example, you have to disable debugging manually and implement minifying scripts by yourself.

## Prerequisites

Firstly, you need to make sure that [PHP](https://secure.php.net/) and [Node.js](https://nodejs.org/) are installed on your computer. You can verify this by typing `php -v` and `node -v` in your command line. If a command can not be found, it is likely that the corresponding software is not installed yet. Simply visit their websites and download it. Make sure that you add PHP to the environment variables. Node.js does it automatically.

Secondly, you need to install two package managers, namely [Composer](https://getcomposer.org/) for PHP and [NPM](https://www.npmjs.com/) for Node.js. If you installed Node.js with an installer, NPM might already have been installed as well. You can verify it by typing `npm -v`. Use also the command `composer` to check if composer is already installed. If one of the commands can not be found, check out their websites in order to install them.

## Installation