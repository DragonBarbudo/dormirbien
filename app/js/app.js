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
  $scope.testDone = false;
  $scope.resultado = {
    imc: "",
    apnea : ""
  };


  //Validations
  $scope.val1 = function(){ if($scope.test.pesoHaVariado && $scope.test.ronca){ return true; } }
  $scope.val2 = function(){ if($scope.test.intensidadRonquido && $scope.test.frecuenciaRonquido){ return true; } }
  $scope.val3 = function(){ if($scope.test.molesta && $scope.test.pausas){ return true; } }
  $scope.val4 = function(){ if($scope.test.cansadoAlLevantarse && $scope.test.cansadoDuranteElDia){ return true; } }
  $scope.val5 = function(){ if($scope.test.cabeceado && $scope.test.presionAlta){ return true; } }



  $scope.finishTest = function(){
    var puntuacion = $scope.test.pesoHaVariado + $scope.test.ronca + $scope.test.intensidadRonquido + $scope.test.frecuenciaRonquido + $scope.test.molesta + $scope.test.pausas + $scope.test.cansadoAlLevantarse + $scope.test.cansadoDuranteElDia + $scope.test.cabeceado + $scope.test.presionAlta;
    $scope.testDone = true;

    if($scope.resultado.imc < 19){ $scope.resultado.imc = 'Se encuentra por debajo de su peso ideal, le recomendamos que visíte un especialista que pueda revisar su situación.'; }
    if($scope.resultado.imc >= 19 && $scope.test.imc <= 25){ $scope.resultado.imc = 'Su peso se encuentra en un estado óptimo.'; }
    if($scope.resultado.imc > 25){ $scope.resultado.imc = 'Padece sobrepeso, le recomendamos que visíte un especialista que pueda revisar su situación.'; }
    $scope.resultado.apnea =  "...";
  }

});



angular.module("ngSwipebox").run(["$templateCache", function($templateCache) {$templateCache.put("swipebox.html","<div ng-repeat=\'photo in photos\'>\n        <a ng-href=\'{{ photo.href }}\' class=\'swipebox\' title=\'{{ photo.title }}\'>\n            <img ng-src=\'{{ photo.src }}\' alt=\'image\'>\n        </a>\n    </div>\n");}]);






$(function(){
  var waypointMenu = new Waypoint({
    element: $('#nosotros'),
    handler: function(direction) {
      if(direction=='down'){
        $('footer').addClass('stick');
      } else if(direction=='up'){
        $('footer').removeClass('stick');
      }
    }
  });
  var waypointFooter = new Waypoint({
    element: $('#contacto'),
    handler: function(direction) {
      if(direction=='down'){
        $('footer').removeClass('stick');
      } else if(direction=='up'){
        $('footer').addClass('stick');
      }
    }
  });
});
