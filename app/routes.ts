routeConfiguration.$inject = ['$routeProvider'];
export function routeConfiguration($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
        .when('/', { template: '<homepage></homepage>', reloadOnSearch: false})
        .otherwise( { template: '<not-found></not-found>'});
}

exposeRouteParamsController.$inject = ['$routeParams', '$scope'];
function exposeRouteParamsController($routeParams: any, $scope: any) {
    $scope.routeParams = $routeParams;
}
