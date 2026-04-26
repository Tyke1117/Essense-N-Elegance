import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { useNavigation } from "@react-navigation/native"

function retailerDetails({navigation}) {
    const [addressPlace, setaddressPlace] = useState("Perfume")
    console.log(addressPlace)
    const navi = useNavigation();
    return(
        <View style={styles.container}>
            <View>
                <Text style={[styles.heading,{marginBottom:10}]}>Fill the above details</Text>
                {/* <View style={styles.type}>
                    <TouchableOpacity onPress={()=>setaddressPlace("Perfume")}>
                        <Text style={[styles.typesHead,addressPlace === "Perfume"?{backgroundColor:"white",elevation:15,borderWidth:0.5,borderColor:"grey"}:{backgroundColor:"#e0e0e0"}]}>Perfume</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setaddressPlace("Watch")}>
                        <Text style={[styles.typesHead,addressPlace === "Watch"?{backgroundColor:"white",elevation:15,borderWidth:0.5,borderColor:"grey"}:{backgroundColor:"#e0e0e0"}]}>Watch</Text>
                    </TouchableOpacity>    
                </View> */}
                <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
                    <View style={{width:"48%"}}>
                        <Text style={styles.detailsHead}>First name</Text>
                        <TextInput style={styles.houseNo} multiline/>
                    </View>
                    <View style={{width:"48%"}}>
                        <Text style={styles.detailsHead}>Last name</Text>
                        <TextInput style={styles.houseNo} multiline/>
                    </View>
                </View>
                <Text style={styles.detailsHead}>Business name</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>Contact No.</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>Address</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>City</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>State</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>GST no.<Text style={{fontStyle:"italic",color:"grey",}}>(optional)</Text></Text>
                <TextInput style={styles.houseNo} multiline/>
                <TouchableOpacity style={styles.send} onPress={()=>{navigation.navigate("retailerDrawer")}}>
                    <Text style={styles.sendTxt}>Add Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default retailerDetails

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