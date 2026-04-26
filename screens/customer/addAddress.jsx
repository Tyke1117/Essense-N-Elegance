import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import addressBook from "./addressbook"
import { useNavigation } from "@react-navigation/native"
import Home from "./Home"
function addAddress({navigation}) {
    const [addressPlace, setaddressPlace] = useState("Home")
    console.log(addressPlace)
    const navi = useNavigation();
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Add your Address Manually</Text>
                <View style={styles.type}>
                    <TouchableOpacity onPress={()=>setaddressPlace("Home")}>
                        <Text style={[styles.typesHead,addressPlace === "Home"?{backgroundColor:"white",elevation:15,borderWidth:0.5,borderColor:"grey"}:{backgroundColor:"#e0e0e0"}]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setaddressPlace("Office")}>
                        <Text style={[styles.typesHead,addressPlace === "Office"?{backgroundColor:"white",elevation:15,borderWidth:0.5,borderColor:"grey"}:{backgroundColor:"#e0e0e0"}]}>Office</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setaddressPlace("Other")}>
                        <Text style={[styles.typesHead,addressPlace === "Other"?{backgroundColor:"white",elevation:15,borderWidth:0.5,borderColor:"grey"}:{backgroundColor:"#e0e0e0"}]}>Other</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection:"row",width:"100%",justifyContent:"space-evenly"}}>
                    <View style={{width:"48%"}}>
                        <Text style={styles.detailsHead}>First name</Text>
                        <TextInput style={styles.houseNo} multiline/>
                    </View>
                    <View style={{width:"48%"}}>
                        <Text style={styles.detailsHead}>Last name</Text>
                        <TextInput style={styles.houseNo} multiline/>
                    </View>
                </View>
                <Text style={styles.detailsHead}>House no. / Block no.</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>Street</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>City</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>State</Text>
                <TextInput style={styles.houseNo} multiline/>
                <TouchableOpacity style={styles.send} onPress={()=>navi.goBack(navi.goBack())}>
                    <Text style={styles.sendTxt}>Set Address</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default addAddress

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    heading:{
        fontFamily:"heading"
    },
    houseNo:{
        backgroundColor:"#e0e0e0",
        color:"black",
        borderRadius:10,
        textAlignVertical:"top",
        padding:10
    },
    send:{
        backgroundColor:"#111",
        borderRadius:10,
        top:10
    },
    sendTxt:{
        color:"#fff",
        padding:8,
        textAlign:"center",
        fontWeight:500
    },
    type:{
        flexDirection:"row",
        gap:20,
        marginVertical:20
    },
    typesHead:{
        fontFamily:"heading",
        fontSize:12,
        backgroundColor:"#e0e0e0",
        paddingVertical:7,
        paddingHorizontal:15,
        borderRadius:7
    },
    detailsHead:{
        fontFamily:"Medium"
    }
})