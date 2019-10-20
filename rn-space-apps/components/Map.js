import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import ENV from '../env';

const MapPreview = props => {

    /*const [pickedLocation, setPickedLocation] = useState();

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (result.status !== 'granted') {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant location permissions to use this app.',
                [{ text: 'Okay' }]
            );
            return false;
        }
        return true;
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
    }

    const location = Location.getCurrentPositionAsync({
        timeout: 5000
    });
    setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
    });*/

    let imagePreviewUrl;
    //imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${
     //   props.location.lat
   //     },${
   //     props.location.lng
    //    }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${
    //    props.location.lat
    //    },${props.location.lng}&key=${ENV.googleApiKey}`;
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=-23.4136589,-46.7553012&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C-23.4136589,-46.7553012&key=${ENV.googleApiKey}`; 
    //`https://maps.googleapis.com/maps/api/js?key=${ENV.googleApiKey}&callback=${mapProp}`


    return (
        <View style={{ ...styles.mapPreview, ...props.style }}>
            <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
        </View>
    );
};

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
});

export default MapPreview;