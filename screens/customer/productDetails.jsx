import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import order from './order';

function ProductDetails({ route,navigation}) {
    const { Prod } = route.params;
    let [selectedProd, setSelectedProd] = useState(Prod.more[0]);
    const navi = useNavigation();
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.imageGrp}>
                <FlatList
                data={[Prod]}
                horizontal
                pagingEnabled 
                showsHorizontalScrollIndicator={false} 
                style={{ height: 350 }}
                renderItem={({item})=>(
                    <View>
                    {item.image1 && <Image source={item.image1} style={styles.imgs} />}
                    {item.image2 && <Image source={item.image2} style={styles.imgs} />}
                    {item.image3 && <Image source={item.image3} style={styles.imgs} />}
                    </View>
                )}  
                />
            </View>

                
            <View style={styles.prodDetails}>
                
                <View style={styles.priceContainer}>
                    <Text style={styles.head}>{Prod.name}</Text>
                    <View style={{flexDirection:"row"}}>
                    <Text>₹</Text>
                    <Text style={styles.price}>{Prod.price}</Text>
                    </View>
            </View>
                    <Text style={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure explicabo voluptas nemo tenetur quas ipsum ut nostrum, alias officiis labore sed unde autem ab? Numquam accusantium necessitatibus ipsam laborum tenetur labore praesentium optio, deleniti molestias est cupiditate animi iusto blanditiis ex odio similique! Velit earum sint totam laboriosam fugit repellendus?</Text>
                    
            <View style={styles.moreProducts}>
                <View style={styles.items}>
                <FlatList 
                data={Prod.more}  
                keyExtractor={(item) => item.id.toString()} 
                horizontal
                showsHorizontalScrollIndicator={false}
                // style={{ height: 350 }}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    style={[styles.moreProd,selectedProd===item && styles.add]}
                    onPress={()=>setSelectedProd(item)} >
                    <View>
                        <Image source={item.image} style={{height:100,width:100,resizeMode:"contain"}}/>
                        
                        <Text>{item.color}</Text>
                        <Text style={{color:item.stock_color}}>{item.stock}</Text>
                    </View>
                    </TouchableOpacity>
                )}
            />
                </View>
            </View>


            <View style={styles.Order}>
                <TouchableOpacity onPress={()=>{navi.navigate("Orders")}}>
                    <Text style={styles.buyNow}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.Add}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            
            </View>

                

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#fff",
    },
    add:{
        borderColor:"black",
        elevation:5
    },
    moreProd:{
        flexDirection:"column",
        backgroundColor:"#e0e0e0",
        margin:10,
        borderWidth:1,
        borderRadius:10,
        padding:10,
        borderColor:"#BFC0C2"
    },
    head: {
        fontFamily: "Bold",
        fontSize: 23
    },
    price:{
        fontSize:20,
        fontFamily:"Bold"
    },
    imageGrp: {
        alignItems: "center",
        height: 350,
        width: "100%",
        justifyContent: "center",
        backgroundColor:"#e0e0e0",
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        flexDirection:"row"
    },
    prodDetails: {
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        backgroundColor: "#fff",
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 100,
        width: "100%",
    },
    flImages: {
        flexDirection: "row"
    },
    imgs: {
        height: 350,
        width: 365,
        resizeMode:"contain"
    },
    brand:{
        fontFamily:"desc",
        fontSize:18,
    },
    priceContainer:{
        // backgroundColor:"red",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginRight:10,
        marginTop:5,
    },
    desc:{
        color:"grey",
        marginTop:20,
        textAlign:"justify",
        width:"96%"
    },
    buyNow:{
        backgroundColor:"#111111",
        width:"96%",
        paddingVertical:10,
        textAlign:"center",
        color:"#fff",
        marginTop:30,
        borderRadius:10,
        fontFamily:"Bold"
    },
    Add:{
        backgroundColor:"#708090",
        width:"96%",
        paddingVertical:10,
        textAlign:"center",
        color:"#fff",
        marginTop:10,
        borderRadius:10,
        fontFamily:"Bold"
    },
    Order:{
        width:"100%",
        
    },
    moreProducts:{
        borderColor:"grey",
        borderTopWidth:1,
        borderBottomWidth:1,
        width:"96%"
    }
});

export default ProductDetails;
