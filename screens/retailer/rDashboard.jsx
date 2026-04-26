import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
// import { LineChart } from "react-native-chart-kit";

function retailerDashboard({navigation}) {
    let data = null;
    // data = {
    //     labels: ['Jan', 'Feb', 'Mar'],
    //     datasets: [
    //       {
    //         data: [1000, 1500, 3000],
    //       },
    //     ],
    //   };
        // const chartConfig = {
        //     backgroundColor: '#e0e0e0',
        //     backgroundGradientFrom: '#f0f0f0',
        //     backgroundGradientTo: '#f0f0f0',
        //     decimalPlaces: 1,
        //     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        //     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        //     style: {
        //       borderRadius: 16,
        //     },
        //     propsForDots: {
        //       r: '2',
        //       strokeWidth: '4',
        //       stroke: '#38A1FF',
        //     },
        //   };
                    
    return(
        <View style={styles.Maincontainer}>
            <ScrollView>
            {data!==null &&
            <View>
                <Text style={[styles.totalSellers,{textAlign:"left",paddingLeft:20,paddingTop:10}]}>Profit</Text>
            <View style={[styles.container,{width:"90%",}]}>
            {/* <LineChart
            data={data}
            width={300}
            height={200}
            chartConfig={chartConfig}
            /> */}
            </View>
            <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",gap:10}}>
            <View style={styles.container}>
                <View style={{alignSelf:"center"}}>
                    <View>
                        <View style={{gap:10,alignItems:"center"}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,borderRadius:5,borderWidth:0.4,paddingHorizontal:10}}>
                                <Text style={styles.totalSellers}>Total Profit</Text>
                            </View>
                            <Text style={styles.total}>1000</Text>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.container}>
          <View style={{alignSelf:"center"}}>
                    <View>
                        <View style={{gap:10,alignItems:"center"}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,borderRadius:5,borderWidth:0.4,paddingHorizontal:10}}>
                                <Text style={styles.totalSellers}>Total Sales</Text>
                            </View>
                            <Text style={styles.total}>4</Text>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.container}>
          <View style={{alignSelf:"center"}}>
                    <View>
                        <View style={{gap:10,alignItems:"center"}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,borderRadius:5,borderWidth:0.4,paddingHorizontal:10}}>
                                <Text style={styles.totalSellers}>View Pendings</Text>
                            </View>
                            <Text style={styles.total}>4</Text>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.container}>
          <View style={{alignSelf:"center"}}>
                    <View>
                        <View style={{gap:10,alignItems:"center"}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,borderRadius:5,borderWidth:0.4,paddingHorizontal:10}}>
                                <Text style={styles.totalSellers}>View Denials</Text>
                            </View>
                            <Text style={styles.total}>1</Text>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.container}>
          <View style={{alignSelf:"center"}}>
                    <View>
                        <View style={{gap:10,alignItems:"center"}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,borderRadius:5,borderWidth:0.4,paddingHorizontal:10}}>
                                <Text style={styles.totalSellers}>Total no. of Users</Text>
                            </View>
                            <Text style={styles.total}>1</Text>
                        </View>
                    </View>
                </View>
          </View>
          </View>
            </View>
        }
          </ScrollView>
        <View>
        {data===null &&
            <View style={{alignItems:"center",justifyContent:"center",height:"100%"}}>
                <Image source={require("./../../assets/get-started.png")}/>
                <TouchableOpacity onPress={()=>navigation.navigate("Add Products")}>
                    <Text style={styles.btn}>Get Started</Text>
                </TouchableOpacity>
            </View>
        }
        </View>
        </View>
    )
}
export default retailerDashboard

const styles = StyleSheet.create({
    Maincontainer:{
        flex:1
    },
    btn:{
        backgroundColor:"#111",
        color:"white",
        paddingVertical:10,
        paddingHorizontal:25,
        borderRadius:20
    },
    container:{
        borderWidth:0.4,
        borderRadius:20,
        backgroundColor:"#f0f0f0",
        elevation:15,
        paddingHorizontal:10,
        paddingVertical:20,
        flexDirection:"row",
        justifyContent:"center",
        width:"45%",
        alignSelf:"center",
        marginTop:10
    },
    imgContainer:{
        flexDirection:"column",
    },
    modifyItems:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"60",
    },
    totalSellers:{
        textAlign:"center",
        fontFamily:"heading",
        textAlignVertical:"center",
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