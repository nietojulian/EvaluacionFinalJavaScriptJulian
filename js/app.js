var Calculadora =
{
	operacion: "null",	ultimaOperacion: "",	texto: "",

  // Inicializar
	init: function()
  {
		this.eventoBoton('teclado')
	},

  //Metodos
	eventoBoton: function(selectKey)
  {
		var teclas = document.querySelectorAll('.' + selectKey + ' img')
		for(i=0;i<teclas.length;i++)
    {
			teclas[i].onmousedown = this.keyUP
			teclas[i].onmouseup = this.keyDWN
		}
	},

//Metodos para cuncionamiento de Botones
	keyUP: function(accion)
  {
		disminuyeKey(accion.target)
	},
	keyDWN: function(accion)
  {
		aumentaKey(accion.target)
    switch (accion.target.id)
    {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        printKey(accion.target.id);
      break;
      case 'on':
        limpiavisor();
      break;
      case 'punto':
        adicionaPunto();
      break;
      case 'sign':
        adicionaSigno();
      break;
      case 'mas':
        suma();
      break;
      case 'menos':
        resta();
      break;
      case 'por':
        multiplica();
      break;
      case 'dividido':
        divide();
      break;
      case 'igual':
        igual();
      break;
    }
	}
}


//Funcione para volver a dejar del tamaño original los botones
function aumentaKey(boton)
{
	boton.style.padding = "0px"
}
//Funcion para hacer mas pequeños los botones al hacer click
function disminuyeKey(boton)
{
	boton.style.padding = "3px"
}

//Funcion para imprimir en el visor el boton seleccionado
function printKey(key)
{
	var visor = document.getElementById('display')
	if (visor.innerHTML.length < 8)
  {
		if(visor.innerHTML == "0" && key != "0")
    {
			visor.innerHTML = key
		}
    else if(visor.innerHTML != "0")
    {
			visor.innerHTML = visor.innerHTML + key
		}
	}
}

//Funcion para limpiar el visor al oprimir el boton on/c
function limpiavisor(){
	var visor = document.getElementById('display')
	visor.innerHTML = "0"
  Calculadora.texto = ""
}

//funcion para agregar el caracter punto
function adicionaPunto()
{
	var punto = "1"
	var visor = document.getElementById('display')
	for(i=0;i<visor.innerHTML.length;i++){
		if (visor.innerHTML[i] == "."){
			punto = "0"
		}
	}
	if(punto == "1" && visor.innerHTML.length < 6){
		visor.innerHTML = visor.innerHTML + "."
	}
}

//funcion para adicionar el operador
function adicionaSigno()
{
	var visor = document.getElementById('display')
	if(visor.innerHTML[0] = "-")
  {
		visor.innerHTML[0] = ""
	}
	if(visor.innerHTML != "0" && visor.innerHTML.length<7)
  {
		visor.innerHTML = "-" + visor.innerHTML
	}
}

//Funcion para sumar
function suma()
{
	if(Calculadora.texto == 'calc')
  {
		Calculadora.texto = ""
		Calculadora.operacion = "null"
	}
	if(Calculadora.operacion == "null")
  {
		Calculadora.texto = document.getElementById('display').innerHTML
		Calculadora.operacion = "+"
	}
  else
  {
		Calculadora.texto = Calculadora.texto + Calculadora.operacion + document.getElementById('display').innerHTML
		Calculadora.operacion = "+"
	}
	document.getElementById('display').innerHTML = ""
}

//Funcion para restar
function resta()
{
	if(Calculadora.texto == 'calc')
  {
		Calculadora.texto = ""
		Calculadora.operacion = "null"
	}
	if(Calculadora.operacion == "null")
  {
		Calculadora.texto = document.getElementById('display').innerHTML
		Calculadora.operacion = "-"
	}
  else
  {
		Calculadora.texto = Calculadora.texto + Calculadora.operacion + document.getElementById('display').innerHTML
		Calculadora.operacion = "-"
	}
	document.getElementById('display').innerHTML = ""
}

//Funcion para multiplicar
function multiplica()
{
	if(Calculadora.texto == 'calc')
  {
		Calculadora.texto = ""
		Calculadora.operacion = "null"
	}
	if(Calculadora.operacion == "null")
  {
		Calculadora.texto = document.getElementById('display').innerHTML
		Calculadora.operacion = "*"
	}
  else
  {
		Calculadora.texto = Calculadora.texto + Calculadora.operacion + document.getElementById('display').innerHTML
		Calculadora.operacion = "*"
	}
	document.getElementById('display').innerHTML = ""
}

//Funcion para dividir
function divide()
{
	if(Calculadora.texto == 'calc')
  {
		Calculadora.texto = ""
		Calculadora.operacion = "null"
	}
	if(Calculadora.operacion == "null")
  {
		Calculadora.texto = document.getElementById('display').innerHTML
		Calculadora.operacion = "/"
	}
  else
  {
		Calculadora.texto = Calculadora.texto + Calculadora.operacion + document.getElementById('display').innerHTML
		Calculadora.operacion = "/"
	}
	document.getElementById('display').innerHTML = ""
}

//Funcion para generar el resultado
function igual()
{
	if(Calculadora.texto == "")
  {
		document.getElementById('display').innerHTML = "0"
	}
  else if(Calculadora.texto == 'calc')
  {
		Calculadora.texto = document.getElementById('display').innerHTML + Calculadora.ultimaOperacion
		document.getElementById('display').innerHTML = actualizarResultado()
		Calculadora.texto = 'calc'
	}
  else
  {
		Calculadora.texto = Calculadora.texto + Calculadora.operacion + document.getElementById('display').innerHTML
		Calculadora.ultimaOperacion = Calculadora.operacion + document.getElementById('display').innerHTML
		document.getElementById('display').innerHTML = generaResultado()
		Calculadora.texto = 'calc'
	}
}
function generaResultado(){
	resGenerado = 0
	resGenerado = eval(Calculadora.texto)
	return resGenerado
}
Calculadora.init()
