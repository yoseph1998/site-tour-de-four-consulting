function closeDiv(id) {
    document.getElementById(id).classList.remove("expand");
}
function toggleDiv(id) {
    document.getElementById(id).classList.toggle("expand");
}
function getCurrentView() {
    let qsArr = window.location.href.split('#');
    var currentView = "";

    // Get Current View
    if(qsArr.length >= 2 )
        currentView = qsArr[qsArr.length-1];
    else
        currentView = "project-overview.html";
    //Update Nav Selected
    var elements = document.getElementsByClassName('nav-item');
    for(i = 0; i < elements.length; i++) {
        if(elements[i].href.includes(currentView))
            elements[i].classList.add("selected");
        else
            elements[i].classList.remove('selected');
    }

    return currentView;
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

window.addEventListener('load', function() {
    getCurrentView();
});