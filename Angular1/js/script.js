// coding by JasonXDDD


// owl carousel
$('.owl-carousel').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    // animateOut: 'slideOutDown',
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
});



/**
 * myapp Module
 *
 * Description
 */
angular
    .module('myapp', ['ngCookies'])
    .controller('mainCtrl', ['$scope', '$http', '$log', '$cookies', function($scope, $http, $log, $cookies) {

        $scope.data = {};
        $scope.title = [];

        $scope.submit = function() {
            var data = $scope.data;
            $http({
                url: "http://zuhzu.net/app/u/user/login.action",
                method: 'POST',
                data: "email=jason841022%40yahoo.com.tw&password=p0lo9ki8mju7",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })

            .success(function(data, status, headers) {
                console.log(data);
                console.log(headers('cookie'));
                console.log(headers('set-cookie'));
                console.log($cookies.get());
                console.log("login success!!");
                $scope.getdata();

            })

        }

        $scope.method = 'GET';
        $scope.url = 'result.json';

        $scope.getdata = function() {
            $http({
                    url: $scope.url,
                    method: $scope.method
                })
                .success(function(data, status) {
                    $scope.status = status;
                    $scope.data = data;
                    console.log($scope.data);
                    $scope.getTitle(data);
                })
                .error(function(response) {
                    $scope.data = response.data || "Request failed";
                    $scope.status = response.status;
                    $log.error(response);
                })
        }

        $scope.getTitle = function(data){
            console.log(data);

            for(index in data.sitemList){
                console.log(data.sitemList[index].sitem.title);
                $scope.title.push(data.sitemList[index].sitem.title);
            }
        }

            
        $scope.getdata();

    }])





.directive('sitems', function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: '',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'ACEM', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'directive/sitem.html',
        replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {

        }
    };
});
