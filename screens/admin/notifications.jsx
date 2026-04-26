import { LinearGradient } from "expo-linear-gradient"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

function Anotifications({navigation}) {
    return(
        <View style={{flex:1,backgroundColor:"#fff",padding:10,gap:10}}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View style={{}}>
                        <Image source={require("./../assets/product.png")} style={{height:60,width:60}}/>
                    </View>
                    <View style={{width:"80%",gap:10,height:50}}>
                        <View>
                            <Text style={styles.price}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde sint, suscipit debitis quos assumenda impedit, error id veniam quas eveniet vitae ad qui deserunt asperiores, reiciendis nisi. Totam, nam.</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    )
}
export default Anotifications
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
        color:"grey"
    },
    brand:{
        color:"grey"
    },
    qty:{
        color:"grey"
    },
    order:{
        backgroundColor:"#111111",
        color:"#fff",
        paddingVertical:10,
        borderRadius:10,
        textAlign:"center",
        marginTop:10
    }
})