(function() {
    angular.module('perdeAchaApp.user').controller('registerController', function($scope, userRepository, $state, $cookies) {

        $scope.save = function() {
            // if (!$scope.name) {
            //     alert("Nome inválido.");
            //     return;
            // }
            if (!$scope.email) {
                alert("Email inválido.");
                return;
            }
            if (!$scope.password) {
                alert("Senha inválida.");
                return;
            }

            userRepository.register({
                // Name: $scope.name,
                Email: $scope.email,
                Password: $scope.password
            }).then(function(msg) {
                userRepository.login({
                    Email: $scope.email,
                    Password: $scope.password
                }).then(function(obj) {
                    if (obj) {
                        $cookies.put('token', obj.access_token);
                        $state.go('home');
                    }
                }, function () {alert("Erro.")});

            }, function () {alert("Erro.")});
        }


    });
})();
