import { LinearGradient } from "expo-linear-gradient"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
function order({navigation}) {
    return(
        <View style={{flex:1,backgroundColor:"#fff",padding:10,gap:10}}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View style={{}}>
                        <Image source={require("./../../assets/product.png")} style={{height:100,width:100}}/>
                    </View>
                    <View style={{width:"60%",gap:10}}>
                        <View>
                            <Text style={styles.itemName}>Item Name</Text>
                            <Text style={styles.price}>$50</Text>
                            <Text style={styles.brand}>Brand</Text>
                        </View>

                        <View style={{flexDirection:"row",width:"100%",justifyContent:'space-between'}}>
                            <TouchableOpacity style={{backgroundColor:"black",padding:5,borderRadius:5}}>
                                <AntDesign name="caretup" size={22} color="white"/>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>1</Text>
                            <TouchableOpacity style={{backgroundColor:"black",padding:5,borderRadius:5}}>
                                <AntDesign name="caretdown" size={22} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.h}>
            <View style={styles.header}>
                <Text style={styles.payment}>Payment Amount:<Text style={{fontWeight:500}}>5000</Text></Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("Payment")}}>
                    <Text style={styles.proceed}>Proceed</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
export default order
const styles=StyleSheet.create({
    container:{
        borderWidth:0.4,
        borderRadius:20,
        backgroundColor:"#fff",
        elevation:15,
        paddingHorizontal:10,
        paddingVertical:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    imgContainer:{
        flexDirection:"row",

    },
    modifyItems:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"60"
    },
    quantity:{
        fontSize:20,
        borderWidth:0.3,
        paddingHorizontal:30,
        borderRadius:10,
        elevation:10,
        backgroundColor:"white"
    },
    itemName:{
        fontFamily:"heading"
    },
    price:{
        fontSize:17,
        fontWeight:500
    },
    h:{
        position:"absolute",
        bottom:0,
        width:"110%",
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
        borderTopWidth:3,
        borderColor:"#d5d5d5",
        paddingVertical:20,
    },
    payment:{
        fontSize:15,
    },
    proceed:{
        fontSize:15,
        backgroundColor:"#111111",
        color:"#fff",
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:20,
        textAlignVertical:"center"
    }
})