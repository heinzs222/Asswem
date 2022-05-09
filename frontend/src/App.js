import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationOn, Star } from "@material-ui/icons";
import "./app.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

function App() {
    const [pins, setPins] = useState([]);

    useEffect(() => {
        const getPins = async () => {
            try {
                const res = await axios.get("/pins");
                setPins(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getPins();
    }, []);

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
            {pins.map((p) => (
                <>
                    <Marker
                        longitude={p.lat}
                        latitude={p.long}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <LocationOn
                            style={{
                                color: "slateblue",
                            }}
                        />
                    </Marker>
                    <Popup longitude={p.lat} latitude={p.long} anchor="left">
                        <div className="card">
                            <label>Ism l7anout</label>
                            <h4 className="place"> {p.title}</h4>
                            <label>chnowa chrit w b9adech</label>
                            <p className="desc">{p.desc}</p>
                            <label>a3tih note</label>
                            <div className="stars">
                                <Star className="stars" />
                                <Star className="stars" />
                                <Star className="stars" />
                                <Star className="stars" />
                                <Star className="stars" />
                            </div>

                            <label>Information</label>
                            <span className="username">
                                Created by <b>{p.username}</b>
                            </span>
                            <span className="date">{format(p.createdAt)}</span>
                        </div>
                    </Popup>
                </>
            ))}
        </Map>
    );
}
export default App;
