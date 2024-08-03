import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "../App.css"
const MapComponent = () => {
    
const location={ lat: 9.5916, lng:76.5222 }
    return (
        <MapContainer
        center={location}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

    <Marker position={location}>

</Marker>

              </MapContainer>
    );
  };
  
  export default MapComponent;