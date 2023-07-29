'use strict';
 
var theme = require('npm install jsonresume-theme-straightforward');
 
var resume = require('./resumeML.json');
process.stdout.write(theme.render(resume));
