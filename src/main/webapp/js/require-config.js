// See http://stackoverflow.com/a/22745553/14731
var scripts = document.getElementsByTagName('script');
var thisScriptTag = scripts[ scripts.length - 1 ];
var dataMain = thisScriptTag.getAttribute('data-main');

requirejs.config({
    baseUrl: 'js',
//    paths: {
//        app: '../app'
//    },
    paths: {
        'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
        'json2': '//cdnjs.cloudflare.com/ajax/libs/json2/20140204/json2.min',
        'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route',
        'angular-resource': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-resource',
        'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
        'angular-moment': '//cdnjs.cloudflare.com/ajax/libs/angular-moment/0.10.2/angular-moment.min',
        'numeral': '//cdnjs.cloudflare.com/ajax/libs/numeral.js/1.5.3/numeral.min',
        'props': '../app/Properties?noext'
    },
    shim: {
        underscore: {
            exports: "_"
        },
        jquery: {
            exports: '$'
        },
        angular: {
            exports: 'angular'
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        }
    },
    deps:['app']
});

var deps = ['angular']

if (dataMain)
    deps.push(dataMain);

require(deps)