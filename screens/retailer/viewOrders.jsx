import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
function allProducts() {
    const navigation = useNavigation();
    return(
        <View style={{flex:1,backgroundColor:"#fff",padding:10,gap:10}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("Product")}}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View style={{}}>
                        <Image source={require("./../../assets/product.png")} style={{height:100,width:100}}/>
                    </View>
                    <View style={{width:"60%",gap:10}}>
                        <View>
                            <Text style={styles.itemName}>Rolex Oyster Perpetual</Text>
                            <Text style={styles.price}>$6,400</Text>
                            <Text style={styles.brand}>Rolex</Text>
                            <Text style={[styles.prodId,{width:190}]}>Product id:110919012023</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <MaterialIcons name="delete-outline" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default allProducts
const styles=StyleSheet.create({
    container:{
        borderWidth:0.4,
        borderRadius:20,
        backgroundColor:"#fff",
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 10, height: 10 },
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
    },
    prodId:{
        fontFamily:"Medium",
        textTransform:"uppercase",
    }
})