CodealiaApp.config([ "$routeProvider",
  function($routeProvider) {
    $routeProvider.
    otherwise({
      redirectTo: "/"
    });
  }
]);
