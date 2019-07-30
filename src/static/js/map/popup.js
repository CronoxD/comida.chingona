import Overlay from 'ol/Overlay';


const element = document.getElementById('popup')

const popup = new Overlay({
	element: element,
	positioning: 'center',
	stopEvent: false,
	offset: [30, -30]
});

function createPopup(feature) {

	const coordinates = feature.getGeometry().getCoordinates();
	popup.setPosition(coordinates)
	const properties = feature.values_.place.properties;
	element.innerHTML = `
		<p><strong>Nombre: </strong>${properties.name}</p>
		<p><strong>Descripcion: </strong>${properties.description}</p>
		<p><strong>Dirección: </strong>${properties.address}</p>
		<p><strong>Calificación: </strong>${properties.rating}</p>
		<p><strong>Rango de precio: </strong>$${properties.price_from} - $${properties.price_to}</p>
	`
	element.classList.add('popup')
}


function showPopup(ev) {

	const feature = ev.map.forEachFeatureAtPixel(ev.pixel, (feature) => feature)

	if (feature) {
		ev.map.addOverlay(popup)
		createPopup(feature);
	} else {
		ev.map.removeOverlay(popup)
	}
}

export default showPopup;
