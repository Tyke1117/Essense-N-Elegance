import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { data } from "./Home";
function explore() {
    const [selected, setselected] = useState('perfumes');
    console.log(selected)
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            {/* <Text style={styles.exploreTxt}>Explore</Text>*/}
                <View style={styles.explore}>
                    <TouchableOpacity onPress={()=>setselected('perfumes')}>
                        <View style={[styles.perfumeContainer,{elevation:selected==="perfumes"?35:0,borderWidth:selected==="perfumes"?0.5:0}]}>
                            <Image source={require("./../../assets/perfume.png")} style={{height:41,width:43}}/>
                            <Text style={{fontFamily:"desc-bold"}}>Perfume</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setselected('watches')}>
                        <View style={[styles.watchesContainer,{elevation:selected==="watches"?35:0,borderWidth:selected==="watches"?0.5:0}]}>
                            <Image source={require("./../../assets/watch.png")} style={{height:44,width:34}}/>
                            <Text>Watch</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {selected==="perfumes" && <View style={styles.prod}>
                    <FlatList data={data} 
                        keyExtractor={(item)=>item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: "space-evenly" }}
                        // contentContainerStyle={{ paddingBottom: 20 }}
                        renderItem={({item})=>(
                            <View style={styles.prodContainer}>
                            <Image source={item.image}  style={{height:140,width:"100%",resizeMode:"contain"}}/>
        
                            <View style={styles.prodDetails}>
                            <View style={{marginLeft:5,marginBottom:3}}>
                                <Text style={{width:89,marginLeft:3,fontWeight:500}}>{item.name}</Text>
                                <Text style={{fontWeight:500,color:"grey"}}>${item.price}</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.addProd}>+</Text>
                            </TouchableOpacity>
                            </View>
                            </View>
                        )} />
        
                </View>
                }
                {selected === "watches" && <View style={styles.prod}>
                    <FlatList data={data} 
                        keyExtractor={(item)=>item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: "space-evenly" }}
                        // contentContainerStyle={{ paddingBottom: 20 }}
                        renderItem={({item})=>(
                            <View style={styles.prodContainer}>
                            <Image source={item.image}  style={{height:140,width:"100%",resizeMode:"contain"}}/>
        
                            <View style={styles.prodDetails}>
                            <View style={{marginLeft:5,marginBottom:3}}>
                                <Text style={{width:89,marginLeft:3,fontWeight:500}}>{item.name}</Text>
                                <Text style={{fontWeight:500,color:"grey"}}>${item.price}</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.addProd}>+</Text>
                            </TouchableOpacity>
                            </View>
                            </View>
                        )} />
        
                </View> }
        </View>
        </View>
    )
}
export default explore
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        
    },
    exploreTxt:{
        top:10,
        fontFamily:"heading",
        left:20,
    },
    popularsTxt:{
        top:20,
        fontFamily:"heading",
        left:20,
        marginBottom:30,
        width:280,
    },
    showAll:{
        top:20,
        fontFamily:"heading",
        marginBottom:20,
    },
    explore:{
        display:"flex",
        flexDirection:"row",
        top:20,
        paddingLeft:30,
        gap:15,
        paddingBottom:30,
        backgroundColor:"#F4F4F4"
    },
    watches:{
        backgroundColor:"#F4F4F4",
    },
    mainImg:{
        height:200,
        width:200,
        position:"absolute",
        top:50,
        left:"23%"
    },
    perfumeContainer:{
        backgroundColor:"white",
        height:80,
        width:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        gap:3,
        borderColor:"grey"
    },
    watchesContainer:{
        backgroundColor:"#fff",
        height:80,
        width:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        gap:3,
    },

    prodContainer:{
        backgroundColor:"#fff",
        width:160,
        height:210,
        display:"flex",
        elevation:10,
        borderRadius:20,
        justifyContent:"center",
        gap:8,
        alignItems:"center",
        marginTop:10,
        borderColor:"#e0e0e0",
        borderWidth:1
    },
    prodDetails:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        width:160,
        borderRadius:20,
        height:52
    },
    addProd:{
        backgroundColor:"#111111",
        textAlign:"center",
        width:50,
        height:50,
        borderBottomRightRadius:20,
        color:"#fff",
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        fontSize:25,
        textAlignVertical:"center"
    }
})