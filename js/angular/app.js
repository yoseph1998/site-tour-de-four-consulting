function closeNav(id) {
    var element = document.getElementById(id);
    element.classList.remove("expand");
}
function toggleNav(id) {
    var element = document.getElementById(id);
    element.classList.toggle("expand");
}

function getCurrentView() {
    let qsArr = window.location.href.split('#');

    if(qsArr.length >= 2 ) {
        return qsArr[qsArr.length-1];
    }
    return "project-overview.html";
}

var app = angular.module('myApp', ['ngAnimate']);

app.controller('myCtrl', function($scope) {
    $scope.viewSrc = getCurrentView();
    $scope.scrollTo = function(id) {
        var element = document.getElementById(id);
        if(element != null) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    window.onhashchange = function() { 
        $scope.viewSrc = getCurrentView();
        var element = document.getElementById('body');
        if(element != null) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
});

