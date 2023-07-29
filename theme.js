'use strict';
 
var theme = require('jsonresume-theme-straightforward');
 
var resume = require('./resume.json');
process.stdout.write(theme.render(resume));
