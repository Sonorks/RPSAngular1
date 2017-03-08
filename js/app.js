(function(){
	var app= angular.module('caracterizacion',[]);
	app.controller('encuestaController', function(){
		this.formVisible = true;
		this.finalVisible = false;
		this.datos = null;
		this.visibilidad = [];
		var numeroPreguntas = 24;
		this.preguntas = [];
		for(var i = 0; i<= numeroPreguntas; i++){
			this.visibilidad[i]=0;
			this.preguntas[i]="-";
			}
		 //donde se guardaran las respuestas
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
		this.conectarBD = function(){
			user = "id931011_root";
			password = "rpsudea";
			hostname = "databases.000webhostapp.com";
			database = "id931011_rpsudeadatabase";
			mysql_connect(hostname,user,password);
			//mysql_select_db(database) or die ("la base de datos no existe");
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
			else if (pregunta === 8){
				this.preguntas[pregunta]="";
				if(document.getElementById("p7Check1").checked){
					this.preguntas[pregunta]+="1"; 
				}
				if(document.getElementById("p7Check2").checked){
					this.preguntas[pregunta]+="2";
				}
				if(document.getElementById("p7Check3").checked){
					this.preguntas[pregunta]+="3";
				}
			}
			else if (pregunta === 11){
				this.preguntas[pregunta]="";
				if(document.getElementById("p11Check1").checked){
					this.preguntas[pregunta]+="1"; 
				}
				if(document.getElementById("p11Check2").checked){
					this.preguntas[pregunta]+="2";
				}
				if(document.getElementById("p11Check3").checked){
					this.preguntas[pregunta]+="3";
				}
				if(document.getElementById("p11Check4").checked){
					this.preguntas[pregunta]+="4";
				}
				if(document.getElementById("p11Check5").checked){
					this.preguntas[pregunta]+="5";
				}
				if(document.getElementById("p11Check6").checked){
					this.preguntas[pregunta]+="6";
				}
			}
			if (pregunta === 14){
				this.preguntas[pregunta]="";
				if(document.getElementById("p14Check1").checked){
					this.preguntas[pregunta]+="1"; 
				}
				if(document.getElementById("p14Check2").checked){
					this.preguntas[pregunta]+="2";
				}
				if(document.getElementById("p14Check3").checked){
					this.preguntas[pregunta]+="3";
				}
			}
			else if (pregunta === 17){
				this.preguntas[pregunta]="";
				if(document.getElementById("p17Check1").checked){
					this.preguntas[pregunta]+="1"; 
				}
				if(document.getElementById("p17Check2").checked){
					this.preguntas[pregunta]+="2";
				}
				if(document.getElementById("p17Check3").checked){
					this.preguntas[pregunta]+="3";
				}
				if(document.getElementById("p17Check4").checked){
					this.preguntas[pregunta]+="4";
				}
				if(document.getElementById("p17Check5").checked){
					this.preguntas[pregunta]+="5";
				}
				if(document.getElementById("p17Check6").checked){
					this.preguntas[pregunta]+="6";
				}
			}
			if (pregunta === 20){
				this.preguntas[pregunta]="";
				if(document.getElementById("p19Check1").checked){
					this.preguntas[pregunta]+="1"; 
				}
				if(document.getElementById("p19Check2").checked){
					this.preguntas[pregunta]+="2";
				}
				if(document.getElementById("p19Check3").checked){
					this.preguntas[pregunta]+="3";
				}
			}
			else if (pregunta === 23){
				this.preguntas[pregunta]="";
				if(document.getElementById("p23Check1").checked){
					this.preguntas[pregunta]+="1"; 
				}
				if(document.getElementById("p23Check2").checked){
					this.preguntas[pregunta]+="2";
				}
				if(document.getElementById("p23Check3").checked){
					this.preguntas[pregunta]+="3";
				}
				if(document.getElementById("p23Check4").checked){
					this.preguntas[pregunta]+="4";
				}
				if(document.getElementById("p23Check5").checked){
					this.preguntas[pregunta]+="5";
				}
				if(document.getElementById("p23Check6").checked){
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
	app.directive('pregunta7', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta7.html'
		};
	});
	app.directive('pregunta8', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta8.html'
		};
	});
	app.directive('pregunta9', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta9.html'
		};
	});
	app.directive('pregunta10', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta10.html'
		};
	});
	app.directive('pregunta11', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta11.html'
		};
	});
	app.directive('pregunta12', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta12.html'
		};
	});
	app.directive('pregunta13', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta13.html'
		};
	});
	app.directive('pregunta14', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta14.html'
		};
	});
	app.directive('pregunta15', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta15.html'
		};
	});
	app.directive('pregunta16', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta16.html'
		};
	});
	app.directive('pregunta17', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta17.html'
		};
	});
	app.directive('pregunta18', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta18.html'
		};
	});
	app.directive('pregunta19', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta19.html'
		};
	});
	app.directive('pregunta20', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta20.html'
		};
	});
	app.directive('pregunta21', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta21.html'
		};
	});
	app.directive('pregunta22', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta22.html'
		};
	});
	app.directive('pregunta23', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta23.html'
		};
	});
	app.directive('pregunta24', function(){
		return{
			restrict: 'E',
			templateUrl: 'pregunta24.html'
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