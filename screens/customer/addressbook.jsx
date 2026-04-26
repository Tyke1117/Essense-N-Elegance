// import { LinearGradient } from "expo-linear-gradient"
// import { StyleSheet, Text, TouchableOpacity, View, Dimensions} from "react-native"
// import Octicons from '@expo/vector-icons/Octicons';
// import Feather from '@expo/vector-icons/Feather';

// function addressBook({navigation}) {
//     return(
//         <View style={{flex:1,backgroundColor:"#fff",padding:10,gap:10}}>
//             <View>
//                 <TouchableOpacity onPress={()=>navigation.navigate("geoLocation")}>
//                     <Text style={{backgroundColor:"#111111",color:"#fff",padding:10,borderRadius:10,paddingLeft:20,paddingVertical:10}}>+ Add Address</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.container}>
//                 <View style={styles.imgContainer}>
//                     <View>
//                         <Octicons name="location" size={50} color="black"/>
//                     </View>
//                     <View style={{width:"80%",gap:10}}>
//                         <View style={{gap:10}}>
//                             <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,width:70,borderRadius:5,borderWidth:0.4}}>
//                                 <Text style={styles.addressLocations}>Home</Text>
//                             </View>
//                             <Text style={styles.address}>701,B wing, Opp madhuban resort,Svayam Sapphire,Anand</Text>
//                             <Text style={styles.mobile}>+919428182546</Text>
//                             <View style={{flexDirection:"row",gap:10}}>
//                                 <TouchableOpacity>
//                                     <Feather name="more-horizontal" size={20} color="black"/>
//                                 </TouchableOpacity>
//                                 <TouchableOpacity>
//                                     <Feather name="share" size={20} color="black"/>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
                
//             </View>
            
//         </View>
//     )
// }
// export default addressBook
// const styles=StyleSheet.create({
//     container:{
//         borderWidth:0.4,
//         borderRadius:20,
//         backgroundColor:"#fff",
//         elevation:15,
//         paddingHorizontal:10,
//         paddingVertical:20,
//         flexDirection:"row",
//         justifyContent:"space-between"
//     },
//     imgContainer:{
//         flexDirection:"row",
//         gap:20,
//         marginLeft:10
//     },
//     modifyItems:{
//         flexDirection:"row",
//         alignItems:"center",
//         justifyContent:"space-between",
//         width:"60"
//     },
//     addressLocations:{
//         textAlign:"center",
//         fontFamily:"heading",
//         textAlignVertical:"center"
//     },
//     address:{
//         fontFamily:"desc-Bold"
//     },
    
// })