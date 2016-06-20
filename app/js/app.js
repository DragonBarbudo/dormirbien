var app = angular.module('dw3', [
  'ng-backstretch',
  'ngSwipebox',
  'tooltipster',
  'duScroll',
  'slickCarousel',
  'rzModule',
  'mgo-angular-wizard'
]);

app.config(function(){

});


app.run(function(){

});


app.controller('MainCtrl', function($scope){


});


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
