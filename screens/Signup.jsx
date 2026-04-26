import { createUserWithEmailAndPassword} from "firebase/auth";
import { addDoc, collection, getDocs, query,where} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, View,StyleSheet,TextInput, TouchableOpacity, Alert, Modal} from "react-native"
import { db } from "../firebaseConfig";

function Signup({navigation}){
    const [pwdShow, setpwdShow] = useState(false)

    const [email, setemail] = useState('');
    const [pwd, setpwd] = useState('');
    const [name, setname] = useState('');
    async function createUser() {
        if(!name || !pwd || !email){
            Alert.alert("Please Fill all the fields first")
        }
        else{
            try {
                const q = query(
                    collection(db,"Users"),
                    where("email","==",email)
                )
                const querySnapShot = await getDocs(q);
                if(querySnapShot.empty){
                    await addDoc(collection(db,"Users"),{
                        name:name,
                        pwd:pwd,
                        email:email,
                        createdAt:new Date()
                    })
                    console.log("User Created");
                    navigation.navigate("Login")
                }
                else{
                    console.log("User already exist")
                }
            } catch (error) {
                Alert.alert(error.message);
            }
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Hey !</Text>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.heading_desc}>Let's create an account!</Text>
            
            <Text style={styles.inputH}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" value={email} onChangeText={setemail}/>
            
            <Text style={styles.inputH}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setname}/>
            
            <Text style={styles.inputH}>Password</Text>

            <View style={{borderWidth:0.5,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",borderRadius:10}}>
                <TextInput style={{ width: 270 }} value={pwd} onChangeText={setpwd} secureTextEntry={true} />
            </View>

            {/* <Modal visible={loadingModal} transparent={true} animationType="fade" >
                
                <View style={{backgroundColor:"#e0e0e0",top:"50%",alignItems:"center",justifyContent:"center",margin:20,paddingVertical:20,borderRadius:10,elevation:15}}>
                    <Text>Email has been sent to your email</Text>
                    <Text>Kindly first verify your email</Text>
                </View>
                
            </Modal> */}

            <TouchableOpacity onPress={createUser}>
                <Text style={{color:"#fff",fontFamily:"heading",fontSize:15,backgroundColor:"#111111",padding:10,borderRadius:10,textAlign:"center",marginTop:10}}>SignUp</Text>
            </TouchableOpacity>

            <View style={{justifyContent:"center",display:"flex",flexDirection:"row",alignItems:"center",paddingTop:10}}>
                <Text style={{color:"#111111",fontFamily:"desc-bold",fontSize:14,textAlign:"center"}}>Already have an account?
                </Text>

                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style={{fontFamily:"heading",fontSize:13}}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Signup;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingVertical:20,
        paddingHorizontal:20,
        paddingTop:60,
    },
    heading:{ 
        fontFamily: "heading", 
        fontSize: 50, 
        lineHeight: 55,
        color:"#111111"
    },
    heading_desc:{
        color:"#111111",
        fontFamily:"desc"
    },
    inputH:{
        paddingTop:15
    },
    input:{
        borderWidth:0.5,
        borderRadius:10,
    }
})