import * as React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationOn } from "@material-ui/icons";

function App() {
    return (
        <Map
            initialViewState={{
                longitude: 9.8642,
                latitude: 37.2768,
                zoom: 14,
            }}
            style={{ width: "100wh", height: "100vh" }}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker longitude={9.8642} latitude={37.2768} anchor="bottom">
                <LocationOn
                    style={{
                        color: "slateblue",
                    }}
                />
            </Marker>
        </Map>
    );
}
export default App;
