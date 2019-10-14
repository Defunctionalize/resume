'use strict';
 
var theme = require('jsonresume-theme-eloquent');
 
var resume = require('./resume.json');
process.stdout.write(theme.render(resume));
