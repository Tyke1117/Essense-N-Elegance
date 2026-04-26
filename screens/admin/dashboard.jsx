import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
function dashboard() {
    return(
        <View style={styles.Maincontainer}>
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View>
                        <FontAwesome name="group" size={50} color="black"/>
                    </View>
                    <View style={{width:"80%",gap:10}}>
                        <View style={{gap:10}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,width:"80%",borderRadius:5,borderWidth:0.4}}>
                                <Text style={styles.totalSellers}>Total Sellers</Text>
                            </View>
                            <Text style={styles.total}>1</Text>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View>
                        <MaterialIcons name="approval" size={50} color="black"/>
                    </View>
                    <View style={{width:"80%",gap:10}}>
                        <View style={{gap:10}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,width:"80%",borderRadius:5,borderWidth:0.4}}>
                                <Text style={styles.totalSellers}>View Approvals</Text>
                            </View>
                            <Text style={styles.total}>1</Text>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View>
                        <MaterialIcons name="pending-actions" size={50} color="black"/>
                    </View>
                    <View style={{width:"80%",gap:10}}>
                        <View style={{gap:10}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,width:"80%",borderRadius:5,borderWidth:0.4}}>
                                <Text style={styles.totalSellers}>View Pendings</Text>
                            </View>
                            <Text style={styles.total}>1</Text>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View>
                        <MaterialCommunityIcons name="cancel" size={50} color="black"/>
                    </View>
                    <View style={{width:"80%",gap:10}}>
                        <View style={{gap:10}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,width:"80%",borderRadius:5,borderWidth:0.4}}>
                                <Text style={styles.totalSellers}>View Denials</Text>
                            </View>
                            <Text style={styles.total}>1</Text>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View>
                        <FontAwesome name="group" size={50} color="black"/>
                    </View>
                    <View style={{width:"80%",gap:10}}>
                        <View style={{gap:10}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,width:"80%",borderRadius:5,borderWidth:0.4}}>
                                <Text style={styles.totalSellers}>Total no. of Users</Text>
                            </View>
                            <Text style={styles.total}>1</Text>
                        </View>
                    </View>
                </View>
          </View>
          </ScrollView>
        </View>
    )
}
export default dashboard
const styles = StyleSheet.create({
    Maincontainer:{
        flex:1
    },
    container:{
        borderWidth:0.4,
        borderRadius:20,
        backgroundColor:"#f0f0f0",
        elevation:15,
        paddingHorizontal:10,
        paddingVertical:20,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
        alignSelf:"center",
        marginTop:10
        },
        imgContainer:{
          flexDirection:"row",
          gap:20,
          marginLeft:10,
          
      },
      modifyItems:{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between",
          width:"60"
      },
      totalSellers:{
          textAlign:"center",
          fontFamily:"heading",
          textAlignVertical:"center"
      },
      total:{
          fontFamily:"desc-Bold",
          fontSize:20,
          fontWeight:700,
        //   backgroundColor:"red",
          width:"80%",
          textAlign:"center"
      },
})