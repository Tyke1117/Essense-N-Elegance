import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

function MyDrawer(props) {
    const navigation = useNavigation();
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Image source={require("./../assets/user.png")} style={{height:100,width:100}}/>
                <Image/>
                <Text style={styles.name}>Pari</Text>
                <Text style={styles.email}>parichudasama05@gmail.com</Text>
                <Text style={styles.role}>(Admin)</Text>
                
                <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                <View style={styles.btn}>
                    <AntDesign name="edit" size={26} color="black"/>
                    <Text style={{fontWeight:500}}>Edit Profile</Text>
                </View>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

export default MyDrawer

const styles = StyleSheet.create({
    header:{
        flexDirection:"column",
        alignItems:"center",
        // justifyContent:"center",
        marginBottom:50,
        // backgroundColor:"red"
    },
    name:{
        fontFamily:"heading",
        fontSize:20,
        width:"100%",
        textAlign:"center",
        // backgroundColor:"red",
        
    },
    email:{
        fontFamily:"desc-Bold",
        width:"100%",
        textAlign:"center",
    },
    role:{
        fontFamily:"desc",
        fontStyle:"italic",
        color:"grey",
        width:"100%",
        textAlign:"center",
    },
    btnContainer:{
        
    },
    btn:{
        backgroundColor:"#e0e0e0",
        width:"45%",
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:30,
        marginTop:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    }
})