# Phoneix Grunt-init template

Sets up support for an asset pipeline for [Phoenix](http://phoenixframework.org/) projects using Grunt. Supports
minification of CSS and JavaScript with support for Sass and CoffeeScript.

Creates the `Gruntfile.js` file, a `package.json` file, and configures 
several Grunt plugins to give you the workflow you need to manage your 
JS and CSS files.

Tested on Phoenix version 0.7, 0.8, and 0.9.

## Setup

Install `grunt-init` (and `grunt-cli` if necessary):

```
$ npm install -g grunt-init
$ npm install -g grunt-cli
```

Clone this repository:

```
$ git clone https://github.com/napcs/grunt-init-phoenix ~/.grunt-init/phoenix
```

Then, in your Phoenix application's root folder, run

```
$ grunt-init phoenix && npm install
```

and answer the prompts:

```
Running "init:phoenix" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

"phoenix" template notes:
Includes support for an asset pipeline for Phoenix projects. Supports
minification of CSS and JavaScript with support for Sass and CoffeeScript.

Please answer the following:
[?] Project name (AwesomeCo) my_app
[?] author (Max Power) Brian Hogan
[?] Do you need to make any changes to the above before continuing? (y/N) n

Writing Gruntfile.js...OK
Writing priv/coffee/app.coffee...OK
Writing priv/sass/app.sass...OK
Writing package.json...OK
```

The `Gruntfile.js` is now created and populated, and can be
modified to meet your project's needs.


## Usage

* Place sass files in /priv/sass
* Place coffee files in /priv/coffee

Use `grunt watch` during development.

This will then assemble `app.css` and `app.js' in the 'priv/static/assets/' folder
which you should use in your layouts instead of the defaults. It also
creates 'app.css.min' and 'app.js.min' which are the minified versions which
you can use instead.

It includes 'phoenix.js' in the resulting JavaScript file. CSS and
JS are minified. If you use other methods, just modify the `concat` task's
configuration and add your JS and CSS files to the appropriate locations.

Use `grunt build` before deployment.
 
## License

The MIT License (MIT)

Copyright (c) 2015 Brian P. Hogan 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
