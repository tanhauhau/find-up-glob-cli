var path = require('path'),
 Promise = require('pinkie-promise'),
childProcess = require('child_process');
    // find = require('../index.js');

function resolve(file){
    return path.resolve(__dirname, file);
}

describe('Find Up Glob', function(){
    var cwd = '--cwd=' + resolve('./fixture/foo/bar');
    var expectations = {
        '*.js': [resolve('./fixture/foo/bar/tee.js'), resolve('./fixture/foo/bar/too.js')],
        'tee.*': [resolve('./fixture/foo/bar/tee.js'), resolve('./fixture/foo/bar/tee.md')],
        't*.*': [resolve('./fixture/foo/bar/tee.js'), resolve('./fixture/foo/bar/tee.md'), resolve('./fixture/foo/bar/too.js')],
        '**/*.js': [resolve('./fixture/foo/bar/tee.js'), resolve('./fixture/foo/bar/too.js')],
        '**/tee.*': [resolve('./fixture/foo/bar/tee.js'), resolve('./fixture/foo/bar/tee.md')],
        '**/t*.*': [resolve('./fixture/foo/bar/tee.js'), resolve('./fixture/foo/bar/tee.md'), resolve('./fixture/foo/bar/too.js')],
        '*.yml': [resolve('./fixture/foo/yo.yml')],
        'yo.yml': [resolve('./fixture/foo/yo.yml')],
        'yo.*': [resolve('./fixture/foo/yo.yml')],
        '**/yo.*': [resolve('./fixture/foo/yo.yml')],
        'i*e.*': [resolve('./fixture/ignore.txt')],
        '*e.*': [resolve('./fixture/foo/bar/tee.js'), resolve('./fixture/foo/bar/tee.md')],
        'a.*': null
    };

    for(var key in expectations){
        (function(key){
            it(key, function(done){
                childProcess.execFile('../index.js', [key, cwd], {
                    cwd: __dirname
                }, function(err, stdout, stderr){
                    expect(err).toEqual(null);
                    if(expectations[key] === null){
                        expect(stdout.trim()).toEqual('');
                    }else{
                        expect(stdout.trim().split(/[\r\n\s]+/g)).toEqual(expectations[key]);
                    }
                    done();
                })
            });
        })(key);
    }
});
