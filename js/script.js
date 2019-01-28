
//Localización de la zona
var southWest = L.latLng( 38.088001,   -4.446774),
northEast = L.latLng( 38.637080,  -4.203558),
mybounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
  zoomControl: true,
  maxBounds:mybounds,
  minZoom: 0,
  maxZoom: 18,

}).setView([38.325328, -4.327499], 10);

//Mapa base
var osm = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/", ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>.' +
  'Creado por Alicia Pizarro</a>',
  id: 'mapbox.streets',
  Autor: 'Creado por Alicia Pizarro',

}).addTo(map);

//Titulo visor
var title = L.control();
title.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info');
  div.innerHTML +=
  '<h2>FERIAS GASTRONOMICAS Y RUTAS RURALES</h2>Comarca de los Pedroches'

  return div;
};
title.addTo(map);

//Pantalla completa
map.on('fullscreenchange', function () {
  if (map.isFullscreen()) {
    console.log('entered fullscreen');
  } else {
    console.log('exited fullscreen');
  }
});
map.addControl(new L.Control.Fullscreen());

//Marcador Azuel
L.marker([38.325328, -4.327499]).addTo(map)
.bindPopup("<b>Feria de la morcilla</b><br>Febrero.").openPopup();

//Marcador Conquista
L.marker([38.408998, -4.501167]).addTo(map)
.bindPopup("<b>Feria del cordero</b><br>Marzo.").openPopup();

//Marcador Cardeña
L.marker([38.269871,-4.323140]).addTo(map)
.bindPopup("<b>Feria del lechón</b><br>Octubre").openPopup();

//Marcador Villanueva de Cordoba
L.marker([ 38.323593, -4.628655]).addTo(map)
.bindPopup("<b>Feria del jamón</b><br>Octubre.").openPopup();

//Marcador Fuencaliente
L.marker([ 38.404651, -4.304797]).addTo(map)
.bindPopup("<b>Feria de la caza y setas</b><br>Noviembre.").openPopup();

//-- Control raton -->
L.control.mousePosition({position: 'bottomleft'}).addTo(map);

//-- Control escala-->
L.control.scale({metric:true, position: 'bottomleft'}).addTo(map);

//Mapa localización
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data &copy; OpenStreetMap contributors';
var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 6, attribution: osmAttrib, width: '120', height: '120' });
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position: 'bottomright', width: '120', height: '120'}).addTo(map);

//Capas GeoJson
function styleLine2(Horcajo1) {
  return {
    weight: 3.3,
    color: 'orange',
    opacity: 1.0,
    fillColor: 'orange', // color de relleno
  };
}
var Horcajo1 =  L.geoJson(Horcajo1, {style: styleLine2}).addTo(map);


function styleLine3(SierraMontoro1) {
  return {
    weight: 3.3,
    color: 'red',
    opacity: 1.0,
    fillColor: 'red',
  };
}
var SierraMontoro1 =  L.geoJson(SierraMontoro1, {style: styleLine3}).addTo(map);


function styleLine4(Yeguas1) {
  return {
    weight: 3.3,
    color: 'green',
    opacity: 1.0,
    fillColor: 'green',
  };
}
var Yeguas1 =  L.geoJson(Yeguas1, {style: styleLine4}).addTo(map);


//Capas base
var baseLayers = {
  "<b>Base OMS": osm,
  "PNOA Máx. Actualidad": Spain_PNOA_Ortoimagen,
  "Unidades administrativas": Spain_UnidadAdministrativa,
  "IGN Base": Spain_IGNBase,
};

//Control capas
var overlayers = {
  "Ruta Horcajo": Horcajo1,
  "Ruta SierraMontoro": SierraMontoro1,
  "Ruta Yeguas": Yeguas1,
};

L.control.layers(baseLayers, overlayers, {
  position: 'topright',
  collapsed: true
}).addTo(map);
Spain_IGNBase.setOpacity(1);

//Marcadores casas rurales
var LeafIconRural = L.Icon.extend({
  iconSize:     [100, 100],
  iconAnchor:   [1, 6],
  popupAnchor:  [30, 30]
});

var TomillosIcon = new LeafIconRural({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/home-15.svg'}),
LinceIcon = new LeafIconRural({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/home-15.svg'}),
CharquenaIcon = new LeafIconRural({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/home-15.svg'});

var customPopupTomillos = "<b>Casa Rural Mirador de los Tomillos</b><br>Para colsultar la página web pulse sobre la foto.<a href='http://casaruralmiradordelostomillos.com/'/a><img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/CasaruralesFotos/TOmillos.jpg' width= '300px' height= '150'/>";
var customPopupLince = "<b>Casa Rural Tierra de Linces</b><br>Para colsultar la página web pulse sobre la foto.<a href= 'http://tierradelinces.es/CMS/'/a><img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/CasaruralesFotos/CasaLinces.jpg' width= '150px'height= '150'/>";
var customPopupCharquena = "<b>Casa Rural Charqueña</b><br>Para colsultar la página web pulse sobre la foto.<a href='http://www.casaruralcharquena.com/'/a><img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/CasaruralesFotos/Charquena.jpg' width= '300px'height= '150'/>";

L.marker([38.323441, -4.330943], {icon: TomillosIcon}).addTo(map).bindPopup(customPopupTomillos);
L.marker([38.326444, -4.328847], {icon: LinceIcon}).addTo(map).bindPopup(customPopupLince);
L.marker([38.205292, -4.2780847], {icon: CharquenaIcon}).addTo(map).bindPopup(customPopupCharquena);


//Ocio y turismo
var LeafIconInteres = L.Icon.extend({
  iconSize:     [60, 60],
  iconAnchor:   [1, 6],
  popupAnchor:  [30, 10]
});

TejaresIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/attraction-15.svg'});
SaltoIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/natural-15.svg'});
PresaIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/wetland-15.svg'});
MiradorIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/attraction-15.svg'});
LastrasIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/natural-15.svg'});
CascadaIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/natural-15.svg'});
PinturasIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/attraction-15.svg'});
HorcajoIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/natural-15.svg'});
ErmitaIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/religious-christian-15.svg'});
SpaIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/swimming-15.svg'});
LinceCentroIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/marker-15.svg'});
CasaCulturaIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/library-15.svg'});
ParqueIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/park-15.svg'});


var customPopupTejares ="<b>Los Tejares de Azuel</b><br>Distancia: 350m<br>A pocos metros de Azuel, se puede visitar este tejar, reconstruido por José Ruiz. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/tejares.jpg' width= '300' height= '200'/>";
var customPopupSalto ="<b>El salto la Olla </b><br> Distancia: 4,7km<br> Se pueden encontrar espárragos en el mes de marzo. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/SaltoOlla.jpg' width= '300' height= '150'/>";
var customPopupPresa ="<b>Presa Buenas Hierbas </b><br> Distancia: 10km<br> Se pueden realizar actividades como la pesca. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/pantano1.jpg' width= '300' height= '150'/>";
var customPopupMirador ="<b> Mirador Cerro de los Tomillos </b><br> Distancia: 250m<br> Al fondo, puede apreciarse Sierra Madrona. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/azuelmirador.jpg' width= '300' height= '100'/>";
var customPopupLastras ="<b>Las Lastras </b><br> Distancia: 13 km<br> El río Cereceda presenta un tramo, encajado en una profunda falla, que discurre sobre estas superficies pulimentadas y escurridizas, muy frecuentadas en verano. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/lastras.jpg' width= '300' height= '200'/>";
var customPopupCascada ="<b>Cascada La Batanera </b><br> Distancia: 15 km<br> Declarado, en marzo de 2011, Parque Natural de Castilla-La Mancha. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/cascada.jpg' width= '300' height= '150'/>";
var customPopupPinturas ="<b>Cueva de Peña Escrita </b><br> Distancia: 16 km<br> Pinturas ruprestres catalogadas como Bien de Interés Cultural y Monumento Histórico-Artístico nacional (25/04/1924). <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/pinturas1.jpg' width= '300' height= '200'/>";
var customPopupHorcajo="<b>Minas del Horcajo</b><br> Distancia: 35 km<br> Se encuentran los resquicios de una población dedicada en torno a su filón de plata y plomo y un maravilloso paisaje. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/Horcajo.jpg' width= '300' height= '150'/>";
var customPopupErmita ="<b>Ermita de la Virgen del Romero</b><br> Distancia: 3 km<br> La ermita del Castillo, lugar donde los Azueleños celebran la Romería en Honor a su Patrona Virgen del Romero el primer fin de semana de cada mayo.  <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/ermita.jpg' width= '300' height= '150'/>";
var customPopupSpa ="<b>Spa Venta del Charco</b><br> Distancia: 16 km<br>Para colsultar la página web pulse sobre la foto.<a href= 'http://www.laventadelcharco.com/'/a> <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/spa.jpg' width= '300' height= '150'/>";
var customPopupLinceCentro ="<b>Centro De Visitantes Venta Nueva</b><br> Distancia: 8,8 km<br> Centro de interpretación del lince con numerosas actividades en el medio natural.  <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/centrolince.jpg' width= '300' height= '150'/>";
var customPopupCasaCultura ="<b>Casa de la Cultura</b><br> Distancia: 200m <br> Centro cultura con biblioteca, salón de actos y consultorio médico.  <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/cultura.jpg' width= '300' height= '150'/>";
var customPopupParque ="<b>Parque infantil</b><br> Distancia: 150m <br> Dispone de merenderos.  <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/parque.png' width= '250' height= '150'/>";

L.marker([38.322217, -4.328203], {icon: TejaresIcon}).addTo(map).bindPopup(customPopupTejares);
L.marker([38.357092,- 4.335369], {icon: SaltoIcon}).addTo(map).bindPopup(customPopupSalto);
L.marker([38.358265, -4.408847], {icon: PresaIcon}).addTo(map).bindPopup(customPopupPresa);
L.marker([38.323840, -4.332006], {icon: MiradorIcon}).addTo(map).bindPopup(customPopupMirador);
L.marker([38.427880, -4.294430], {icon: LastrasIcon}).addTo(map).bindPopup(customPopupLastras);
L.marker([38.434132, -4.286062], {icon: CascadaIcon}).addTo(map).bindPopup(customPopupCascada);
L.marker([38.428147, -4.286062], {icon: PinturasIcon}).addTo(map).bindPopup(customPopupPinturas);
L.marker([38.514626, -4.440054], {icon: HorcajoIcon}).addTo(map).bindPopup(customPopupHorcajo);
L.marker([38.317792, -4.341439], {icon: ErmitaIcon}).addTo(map).bindPopup(customPopupErmita);
L.marker([38.202634, -4.278589], {icon: SpaIcon}).addTo(map).bindPopup(customPopupSpa);
L.marker([38.263658, -4.311883], {icon: LinceCentroIcon}).addTo(map).bindPopup(customPopupLinceCentro);
L.marker([38.327075, -4.327518], {icon: CasaCulturaIcon}).addTo(map).bindPopup(customPopupCasaCultura);
L.marker([38.325836, -4.32656], {icon: ParqueIcon}).addTo(map).bindPopup(customPopupParque);

//Hosteleria
var LeafIconInteres = L.Icon.extend({
  iconSize:     [60, 80],
  iconAnchor:   [1, 6],
  popupAnchor:  [60, 80]
});

BarRuizIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/restaurant-15.svg'});
BarPipaIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/restaurant-15.svg'});
BarCurroIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/restaurant-15.svg'});
TiendaAnaIcon = new LeafIconInteres({iconUrl: 'D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/icons/commercial-15.svg'});

var customPopupBarRuiz ="<b>Bar Heranos Ruiz</b><br>Distancia: 50m<br>Bar de ambiente agradable y familiar con especialidad en cocina en lechón ibérico, queso, chipirones, jamón ibérico, montados de lomo. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/barruiz.jpg' width= '200' height= '200'/>";
var customPopupBarPipa ="<b>Bar Los Monteros </b><br>Distancia: 7km<br>Lechón Ibérico, ciervo en salsa, carrillada en salsa, flamenquín casero y nuestras tapas de toda la vida. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/Casapipa.png' width= '250' height= '150'/>";
var customPopupBarCurro ="<b>Bar Curro</b><br>Distancia: 50m<br>Bar de ambiente agradable y familiar con especialidad en cocina en carne de monte, queso, chipirones, jamón ibérico, chorizo al infierno. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/Barcurro.png' width= '300' height= '200'/>";
var customPopupTiendaAna ="<b>Tienda ALimentación Ana</b><br>Distancia: 50m<br>Tienda de alimentación con fruteria y charcutería. <img src='D:/MASTER_TIG/Modulo_II/PROGRAMACION/Pizarro_Alicia_Final_PA/PuntosInteres/Tiendaana.png' width= '150' height= '300'/>";

L.marker([38.324713, -4.327828], {icon: BarRuizIcon}).addTo(map).bindPopup(customPopupBarRuiz);
L.marker([38.271201, -4.324041], {icon: BarPipaIcon}).addTo(map).bindPopup(customPopupBarPipa);
L.marker([38.324191, -4.328247], {icon: BarCurroIcon}).addTo(map).bindPopup(customPopupBarCurro);
L.marker([38.325536, -4.329210], {icon: TiendaAnaIcon}).addTo(map).bindPopup(customPopupTiendaAna);
