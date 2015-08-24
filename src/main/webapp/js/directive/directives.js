define(['angular'], function (ng) {

    return ng.module('directives', [])
        .directive('focus', function(){
            /* @see http://angular-tips.com/blog/2013/08/why-does-angular-dot-js-rock/ */
            return {
                link: function(scope, element, attrs){
                    element[0].focus();
                }
            }
        });

});
