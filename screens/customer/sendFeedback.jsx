import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
function sendFeedback() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Give feedback</Text>
                <TextInput style={styles.feedback} multiline/>
                <TouchableOpacity style={styles.send}>
                    <Text style={styles.sendTxt}>Send Feedback</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default sendFeedback

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    heading:{
        fontFamily:"heading"
    },
    feedback:{
        backgroundColor:"#e0e0e0",
        color:"black",
        height:200,
        borderRadius:20,
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
    }
})