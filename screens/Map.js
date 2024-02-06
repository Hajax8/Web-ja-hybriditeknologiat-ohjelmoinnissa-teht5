import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

function Map(props) {
    const [marker, setMarker] = useState([]);
    console.log('displaying map');

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarker(marker => [...marker, coords])
    }

    return (
        <MapView
            style={styles.map}
            region={props.location}
            mapType={props.mapType}
            onLongPress={showMarker}
        >
            {marker && marker.map((marker, index) =>(
                <Marker
                key={index}
                title="My marker"
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                />
                ))
            
        }
        </MapView>
    );

}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    }
})

export default Map;