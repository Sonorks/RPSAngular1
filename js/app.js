(function(){
	var app= angular.module('caracterizacion',[]);
	app.controller('encuestaController', function(){
		this.formVisible = true;
		this.finalVisible = false;
		this.datos = null;
		this.visibilidad = [];
		var numeroPreguntas = 6;
		for(var i = 0; i<= numeroPreguntas; i++){
			this.visibilidad[i]=0;
			}
		this.preguntas = []; //donde se guardaran las respuestas
		this.mostrarDatos = function(){
			var usuario = this.datos.usuario;
			var programa = this.datos.programa;			
			this.formVisible = false;
			this.visibilidad[1] = 1;
		}
		this.esVisible = function(pregunta){
			if (this.visibilidad[pregunta] === 0){
				return false;
			}
			else{
				return true;
			}
		}
		this.cambiarPregunta = function(actual,siguiente){
			this.visibilidad[actual] = 0;
			if(siguiente=== 0){
				this.finalVisible = true;
				for(var i = 1; i<=numeroPreguntas; i++){
					console.log("Pregunta: "+i+" "+this.preguntas[i]);
				}
			}
			this.visibilidad[siguiente] = 1;
		}
		this.setRespuesta = function(res,pregunta){
			if (pregunta === 2){
				this.preguntas[pregunta]="";
				if(document.getElementById("p2Check1").checked){
					this.preguntas[pregunta]+="1"; 
				}
				if(document.getElementById("p2Check2").checked){
					this.preguntas[pregunta]+="2";
				}
				if(document.getElementById("p2Check3").checked){
					this.preguntas[pregunta]+="3";
				}
			}
			else if (pregunta === 5){
				this.preguntas[pregunta]="";
				if(document.getElementById("p5Check1").checked){
					this.preguntas[pregunta]+="1"; 
				}
				if(document.getElementById("p5Check2").checked){
					this.preguntas[pregunta]+="2";
				}
				if(document.getElementById("p5Check3").checked){
					this.preguntas[pregunta]+="3";
				}
				if(document.getElementById("p5Check4").checked){
					this.preguntas[pregunta]+="4";
				}
				if(document.getElementById("p5Check5").checked){
					this.preguntas[pregunta]+="5";
				}
				if(document.getElementById("p5Check6").checked){
					this.preguntas[pregunta]+="6";
				}
			}
			else{
				this.preguntas[pregunta]=res;
			}
			console.log(this.preguntas[pregunta]);
		}
	});

	app.directive('pregunta1', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta1.html'
		};
	});
	app.directive('pregunta2', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta2.html'
		};
	});
	app.directive('pregunta3', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta3.html'
		};
	});
	app.directive('pregunta4', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta4.html'
		};
	});
	app.directive('pregunta5', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta5.html'
		};
	});
	app.directive('pregunta6', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta6.html'
		};
	});
	app.directive('final', function(){
		return{
			restrict: 'E',
			templateUrl: 'final.html'
		};
	});
	app.directive('datos', function(){
		return{
			restrict: 'E',
			templateUrl: 'datos.html'
		};
	});
})();