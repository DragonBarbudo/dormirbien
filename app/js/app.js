var app = angular.module('dw3', [
  'ng-backstretch',
  'ngSwipebox',
  'tooltipster',
  'duScroll',
  'slickCarousel',
  'rzModule',
  'mgo-angular-wizard',
  'uiGmapgoogle-maps'
]);

app.config(function(uiGmapGoogleMapApiProvider){
  uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBsjQCGDPC5cnf-GqNpov0r6lSeNAjQ8Hk',
      v: '3', //defaults to latest 3.X anyhow
      libraries: ''
  });
});


app.run(function(){

});


app.controller('MainCtrl', function($scope){


});


app.controller('FormCtrl', function($scope){
  $scope.form = {};
  $scope.quickForm = function(){

  }
})


app.controller('TestCtrl', function($scope){



  $scope.test = {
    peso : 60,
    altura: 165,
    imc: 0,
    options:{
      floor: 0,
      ceil: 280,
      step: 1,
      onEnd: function(id) {
        $scope.test.imc = $scope.test.peso / (($scope.test.altura/100) * ($scope.test.altura/100));
      }
    },
    optionsb:{
      floor:0,
      ceil:50,
      readOnly: true,
      showSelectionBar: true,
      getSelectionBarColor: function(val){
        if(val<=15){return '#D0021B'; }
        if(val<19){return '#E0A52F'; }
        if(val>=19 && val<=25){return '#C3E02F'; }
        if(val>25 && val<=30){return '#E0D72F'; }
        if(val>30 && val<=35){return '#E0A52F'; }
        if(val>35 && val<=40){return '#E0562F'; }
        if(val>40){return '#D0021B'; }
      },
      getPointerColor: function(val){
        if(val<=15){return '#D0021B'; }
        if(val<19){return '#E0A52F'; }
        if(val>=19 && val<=25){return '#C3E02F'; }
        if(val>25 && val<=30){return '#E0D72F'; }
        if(val>30 && val<=35){return '#E0A52F'; }
        if(val>35 && val<=40){return '#E0562F'; }
        if(val>40){return '#D0021B'; }
      }
    }
  };

  $scope.test.imc = $scope.test.peso / (($scope.test.altura/100) * ($scope.test.altura/100))

  $scope.finishTest = function(){
    alert('end');
  }

});



angular.module("ngSwipebox").run(["$templateCache", function($templateCache) {$templateCache.put("swipebox.html","<div ng-repeat=\'photo in photos\'>\n        <a ng-href=\'{{ photo.href }}\' class=\'swipebox\' title=\'{{ photo.title }}\'>\n            <img ng-src=\'{{ photo.src }}\' alt=\'image\'>\n        </a>\n    </div>\n");}]);
