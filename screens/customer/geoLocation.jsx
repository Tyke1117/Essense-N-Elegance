// import { useEffect, useState } from "react";
// import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import MapView from "react-native-maps";
// const { width, height } = Dimensions.get('window');
// import * as Location from 'expo-location';
// import { Marker } from 'react-native-maps';

// function geoLocation({navigation}) {
//     const [location, setLocation] = useState(null);
//     const [address, setAddress] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);

//     useEffect(() => {
//         (async () => {
//           let { status } = await Location.requestForegroundPermissionsAsync();
//           if (status !== 'granted') {
//             setErrorMsg('Permission denied');
//             return;
//           }
//         })();
//       }, []);

//       const getAddressFromCoords = async (latitude, longitude) => {
//         try {
//           const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });
      
//           setAddress(address);
//           console.log("Address from coords:", address);
//           alert(JSON.stringify(address, null, 2));
//         } catch (error) {
//           console.error("Error in getAddressFromCoords:", error);
//         }
//       };
    
//       const getCurrentLocation = async () => {
//         let currentLocation = await Location.getCurrentPositionAsync({
//           accuracy: Location.Accuracy.Highest,
//         });
    
//         const { latitude, longitude } = currentLocation.coords;
//         setLocation(currentLocation.coords);
//         await getAddressFromCoords(latitude, longitude);
//         let reverseGeocode = await Location.reverseGeocodeAsync({
//           latitude: currentLocation.coords.latitude,
//           longitude: currentLocation.coords.longitude,
//         });
//         if (reverseGeocode.length > 0) {
//           setAddress(reverseGeocode[0]);
//         }
//       };
//       const handleManualAddress = () => {
//         navigation.navigate("addAddress")
//       };
//     return(
//     <View style={{flex:1}}>
//         <MapView
//         style={styles.map}
//         initialRegion={{
//             latitude: location?.latitude || 37.78825,
//             longitude: location?.longitude || -122.4324,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01,
//         }}
//         showsUserLocation={true}>
//         {location && (
//             <Marker
//             coordinate={{
//                 latitude: location.latitude,
//                 longitude: location.longitude,
//             }}
//             title="Your Location"
//             description={address ? `${address.street}, ${address.city}` : "Selected Location"}
//             />
//         )}
//         </MapView>
//         <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={getCurrentLocation}>
//             <Text style={styles.buttonText}>📍 Choose Your Current Location</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={[styles.button, styles.manualButton]} onPress={handleManualAddress}>
//             <Text style={styles.buttonText}>✏️ Add Address Manually</Text>
//         </TouchableOpacity>
//         </View>
//     </View>
//     )
// }
// export default geoLocation

// const styles=StyleSheet.create({
//     map: {
//         width: width,
//         height: height, // Full screen
//       },
//       buttonContainer: {
//         position: 'absolute',
//         bottom: 30,
//         width: '100%',
//         alignItems: 'center',
//       },
//       button: {
//         backgroundColor: '#007AFF',
//         padding: 15,
//         borderRadius: 10,
//         width: '90%',
//         alignItems: 'center',
//         marginBottom: 10,
//       },
//       manualButton: {
//         backgroundColor: '#28A745',
//       },
//       buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//       },
// })