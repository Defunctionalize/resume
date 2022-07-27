'use strict';
 
var theme = require('jsonresume-theme-eloquent');
 
var resume = require('./resumeML.json');
process.stdout.write(theme.render(resume));
