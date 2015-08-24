define(['angular'], function (ng) {

    return ng.module('services', [])
        .service('contactService', function($http){

            this.findById = function(id){
                return $http.get('./app/Contacts/' + id)
            }

        });

});
