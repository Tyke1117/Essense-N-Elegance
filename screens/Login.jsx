import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator,I} from "react-native";
import { db } from "../firebaseConfig";
function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    
    async function loginUser() {
        if (!email || !pwd) {
            Alert.alert("Please enter email and password");
            return;
        }
        try {
            const adminQuery = query(
                collection(db,"Admin"),
                where("email","==",email)
            )
            const adminSnapShot = await getDocs(adminQuery);
            if(!adminSnapShot.empty){
                navigation.navigate("admin");
                console.log("Admin Logged in")
            }
            else{
                const q = query(
                    collection(db,"Users"),
                    where("email","==",email)
                )
                const querySnapShot = await getDocs(q);
                if(querySnapShot.empty){
                    console.log("User doesn't exist")
                }
                const userDoc = querySnapShot.docs[0].data();
                if(userDoc.pwd === pwd && userDoc.email === email){
                    console.log("User logged in")
                    navigation.navigate("nav")
                }
                else if(userDoc.email !== email){
                    console.log("User doesn't exist")
                }
                else{
                    console.log("Incorrect password")
                }
            }
        } catch (error) {
            Alert.alert("Login failed", error.message);
        }
    }

    // if (loading) {
    //     return (
    //         <View style={styles.loaderContainer}>
    //             <ActivityIndicator size="large" color="#111111" />
    //         </View>
    //     );
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome Back!</Text>
            <Text style={styles.subHeading}>Login to continue</Text>

            <Text style={styles.inputH}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" onChangeText={(email)=>setEmail(email)}/>

            <Text style={styles.inputH}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={(pwd)=>setPwd(pwd)}/>

            <TouchableOpacity onPress={loginUser}>
                <Text style={styles.loginBtn}>Customer Login</Text>
            </TouchableOpacity>
            

            <View style={styles.signupRedirect}>
                <Text style={styles.signupText}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
                    <Text style={{ fontFamily: "heading", fontSize: 13 }}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    heading: { 
        fontFamily: "heading", 
        fontSize: 30, 
        color: "#111111"
    },
    subHeading: {
        color: "#555",
        fontSize: 16,
        marginBottom: 20
    },
    inputH: {
        paddingTop: 15
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10
    },
    loginBtn: {
        color: "#fff",
        fontFamily: "heading",
        fontSize: 15,
        backgroundColor: "#111111",
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        marginTop: 10
    },
    signupRedirect: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10
    },
    signupText: {
        color: "#111111",
        fontSize: 14,
        textAlign: "center"
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
});
