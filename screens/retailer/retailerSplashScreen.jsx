import React, { useState } from 'react';
import { TouchableOpacity,Text, StyleSheet, View, FlatList, Image } from 'react-native';

function RetailerSplashScreen({navigation}){
    const screenData = [
        {id:1,img:require("./../../assets/retailer.png"),titleTxt:"Unlock New Opportunities as a Seller",txt:"Join our platform and start selling your products to a wider audience",scrollerImg:require("./../../assets/first.png")},
        {id:2,img:require("./../../assets/shop.png"),titleTxt:"Sell Online, Grow Your Business",txt:"Selling online can help you reach a wider audience, increase sales, and grow your business. You'll have access to a global market, 24/7, and can manage your inventory and orders with ease",scrollerImg:require("./../../assets/second.png")},
        {id:3,img:require("./../../assets/getStarted.png"),titleTxt:"Get Started as a Seller Today",txt:"Don't miss out on the opportunity to grow your business and increase sales. Start selling online today and take your business to the next level",scrollerImg:require("./../../assets/third.png")}
    ]
    return(
        <View style={[styles.container]}>
            <FlatList 
                data={screenData}
                keyExtractor={(item)=>item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>{
                    if(item.id ==1 || item.id == 2){
                    return <View style={{width:"360",height:"100%",alignItems:"center"}}>
                        <Image source={item.img} style={{height:200,width:200,marginTop:200}}/>
                        <View style={{marginTop:50}}>
                        <Text style={{fontFamily:"heading",fontSize:15,textAlign:"center"}}>{item.titleTxt}</Text>
                        <Text style={{fontFamily:"desc-Bold",fontSize:13,paddingHorizontal:10,textAlign:"justify"}}>{item.txt}</Text>
                        </View>
                        <Image source={item.scrollerImg} style={{height:10,width:20,marginTop:150}}/>
                    </View>
                    }else if(item.id==3){
                        return <View style={{width:"360",height:"100%",alignItems:"center"}}>
                        <Image source={item.img} style={{height:200,width:200,marginTop:200}}/>
                        <View>
                        <Text style={{fontFamily:"heading",fontSize:15,textAlign:"center"}}>{item.titleTxt}</Text>
                        <Text style={{fontFamily:"desc-Bold",fontSize:13,paddingHorizontal:10}}>{item.txt}</Text>
                        <TouchableOpacity style={{alignSelf:"center",marginTop:20}} onPress={()=>navigation.replace("retailerDetails")}>
                            <Text style={{backgroundColor:"#38A1FF",color:"white",textAlign:"center",width:120,paddingVertical:10,borderRadius:10}}>Become a Seller</Text>
                        </TouchableOpacity>
                        </View>
                        <Image source={item.scrollerImg} style={{height:10,width:20,marginTop:150}}/>
                    </View>
                    }
            }}
            />
        </View>
    );
}

export default RetailerSplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    text: {
        width: "50%",
        padding: 20,
        textAlign: "center",
        fontSize: 18,
        borderRadius: 10,
        elevation: 3,
    },
});
