var assert = require('assert');

var base_dir = __dirname + '/../..',
    module_dir = base_dir + '/node_modules/'
    lib_dir = base_dir + '/lib/';

process.cls = require(module_dir + 'opensoars_cls');

process.MSGS = require(lib_dir + 'msgs.js');

var logCommentData = require(lib_dir + 'logCommentData.js');



describe('#logCommentData', function (){

  it('should not throw when we pass no arguments', function (){
    assert.doesNotThrow(function (){
      logCommentData();
    });
  });

  it('should call logErr with 1 argument', function (done){
      process.logErr = function (){
        assert.equal(arguments.lenght, 1);
        done();
      };

      logCommentData();
  });

});