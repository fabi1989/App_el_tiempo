const contenedor = document.querySelector('#contenedor')
const lugar = document.querySelector('h1')
const actual = document.querySelector('#actual');
const max = document.querySelector('#max');
const min = document.querySelector('#min');
const viento = document.querySelector('#viento');
const humedad = document.querySelector('#humedad');
const visibilidad = document.querySelector('#visibilidad');
const descripcion = document.querySelector('#descripcion');
const fecha = document.querySelector('#fecha');
const formulario = document.querySelector('#form_buscar');
const input = document.querySelector('#input');

const apiKey = `883807618cfff20709cc29f508553fd7`;

				
				
async function elClima (city) {
	const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=Es`
	);

	const datos = await respuesta.json();
	//console.log(datos);

	cargaDatos(datos)
}

//elClima()


function cargaDatos(datos){
	lugar.textContent = datos.name
	actual.textContent = Math.round(datos.main.temp) + " °C";
	max.textContent = Math.round(datos.main.temp_max) + " °C";
	min.textContent = Math.round(datos.main.temp_min) + " °C";
	viento.textContent = datos.wind.speed + " Km/h";
	humedad.textContent = datos.main.humidity + " %";
	visibilidad.textContent = datos.visibility / 1000 + " Km";
	descripcion.textContent = datos.weather[0].description;
	const nFecha = new Date();
	fecha.textContent = nFecha.toDateString();
}

formulario.addEventListener('submit',function(e){
	e.preventDefault();
	const city = input.value;
	if(city!==''){
		elClima(city)
		input.value = '';
	}
})

