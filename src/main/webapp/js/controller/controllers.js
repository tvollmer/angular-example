define(['angular'], function (ng) {

    return ng.module('controllers', ['services']).
        controller('homeController', function ($rootScope, $scope) {
            $rootScope.title = "angularAMD home";
            $scope.message = "Hello World";
            console.log('home was called');

        }).
        controller('view1Controller', function($rootScope, $scope) {
            $rootScope.title = "angularAMD view1";
            $scope.message = "Hello from view1";
            console.log('view1 was called');
        }).
        controller('view2Controller', function($rootScope, $scope) {
            $rootScope.title = "angularAMD view2";
            $scope.message = "Hello from view2";
            console.log('view2 was called');
        }).
        controller('view3Controller', function($rootScope, $scope, $interpolate, contactService) {
            $rootScope.title = "angularAMD view3";

            // @see Angularjs Data Model : http://www.webdeveasy.com/angularjs-data-model/
            contactService.findById('3')

                .then(function(response){
                    var contact = response.data;
                    console.log('setting the message from rest call with : ', contact);
                    $scope.message = $interpolate("Hello World, your contact name was {{name}}")(contact);
                    return contact;
                }, function(response){
                    console.log("an error must have occurred : ", response)
                })

                .then(function(contact){
                    console.log('final contact was : ', contact);
                }, function(response){
                    console.log('some error occurred.');
                })

                ;

            console.log('view3 was called');
        });

});
