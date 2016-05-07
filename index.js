#!/usr/bin/env node
'use strict';
var meow = require('meow'),
    find = require('find-up-glob');

const cli = meow(`
	Usage
        $ find-up-glob <glob>

    Options
        --cwd=<dir>  Working directory

    Examples
        $ echo $PWD
        /Users/tanhauhau/foo/bar
        $ find-up-glob *.js
        /Users/tanhauhau/foo/bar/a.js
        /Users/tanhauhau/foo/bar/b.js
`, {
	alias: {
		h: 'help'
	}
});

if(cli.input.length === 0){
    console.error('Please specify a glob');
    process.exit(1);
}
var files = find.sync(cli.input[0], cli.flags);
if(files != null){
    for(var file of files){
        console.log(file);
    }
}
process.exit();
