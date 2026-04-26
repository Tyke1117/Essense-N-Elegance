import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
function payment({navigation}) {
    const [selected, setSelected] = useState("COD")
    const [selectPayment, setSelectPayment] = useState(null);
    return(
      <View style={{flex:1}}>
      <ScrollView style={{ marginTop: 10}}>
          <View style={styles.items}>
            <Text style={styles.priceTxt}>Total Price:</Text>
            <Text style={styles.price}>5000</Text>
          </View>
          <Text style={{paddingHorizontal:20,marginTop:10,fontFamily:"heading"}}> Select Address</Text>
          <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <View>
                        <Octicons name="location" size={50} color="black"/>
                    </View>
                    <View style={{width:"80%",gap:10}}>
                        <View style={{gap:10}}>
                            <View style={{backgroundColor:"rgba(169, 169, 169, 0.38)",elevation:-150,width:70,borderRadius:5,borderWidth:0.4}}>
                                <Text style={styles.addressLocations}>Home</Text>
                            </View>
                            <Text style={styles.address}>701,B wing, Opp madhuban resort,Svayam Sapphire,Anand</Text>
                            <Text style={styles.mobile}>+919428182546</Text>
                            <View style={{flexDirection:"row",gap:10}}>
                                <TouchableOpacity onPress={() =>{navigation.navigate("Address Book")}}>
                                    <Feather name="edit" size={20} color="black"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
          </View>
          <View style={styles.paymentList}>
            <View style={styles.Upi}>
              <TouchableOpacity style={{backgroundColor:selected==="upi"?"#111":"#e0e0e0",borderRadius:20}} onPress={()=>setSelected('upi')}>
                <Text style={{textAlign:"center",paddingVertical:15, color:selected==="upi"?"#fff":"#111",fontWeight:600}}>UPI Payment</Text>
              </TouchableOpacity>
            </View>
            {selected==="upi"&&
              <View style={{paddingHorizontal:7}}>
                <Text style={{color:"grey",fontSize:13}}>Please use the same verified bank account for payment</Text>
                <View style={styles.UpiTypes}>
                <TouchableOpacity onPress={()=>setSelectPayment('gpay')}>
                  <View style={[styles.type,{backgroundColor:selectPayment==="gpay"?"black":"#fff"}]} >
                    <Image source={require("./../../assets/gpay.png")}/>
                    <Text style={{width:50,textAlign:"center",fontSize:12,color:selectPayment==='gpay'?"white":"black",fontWeight:600}}>Google Pay</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setSelectPayment('paytm')}>
                  <View style={[styles.type,{backgroundColor:selectPayment==="paytm"?"black":"#fff"}]}>
                    <Image source={require("./../../assets/paytm.png")}/>
                    <Text style={{width:50,textAlign:"center",fontSize:12,color:selectPayment==='paytm'?"white":"black",fontWeight:600}}>Paytm</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setSelectPayment('bhim')}>
                  <View style={[styles.type,{backgroundColor:selectPayment==="bhim"?"black":"#fff"}]}>
                    <Image source={require("./../../assets/bhim.png")}/>
                    <Text style={{width:50,textAlign:"center",fontSize:12,color:selectPayment==='bhim'?"white":"black",fontWeight:600}}>BHIM</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setSelectPayment('phonepe')}>
                  <View style={[styles.type,{backgroundColor:selectPayment==="phonepe"?"black":"#fff"}]}>
                    <Image source={require("./../../assets/phonepe.png")}/>
                    <Text style={{width:50,textAlign:"center",fontSize:12,color:selectPayment==='phonepe'?"white":"black",fontWeight:600}}>PhonePe</Text>
                  </View>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={{backgroundColor:"blue",paddingVertical:10,borderRadius:20}}>
                  <Text style={{textAlign:"center",color:"white"}}>Proceed</Text>
                </TouchableOpacity>
              </View>
            }
            <View style={styles.NetBanking}>
              <TouchableOpacity style={{backgroundColor:selected ==='Net Banking'?"#111":"#e0e0e0",borderRadius:20}} onPress={()=>setSelected('Net Banking')}>
                <Text style={{textAlign:"center",paddingVertical:15,color:selected==="Net Banking"?"#fff":"#111",fontWeight:600}}>Net Banking</Text>
              </TouchableOpacity>
            </View>
            {selected==="Net Banking"&&
              <View style={{paddingHorizontal:7}}>
                <Text style={{color:"grey",fontSize:13}}>Please use the same verified bank for payment</Text>
              </View>
            }

            
            <View style={styles.COD}>
              <TouchableOpacity style={{backgroundColor:selected ==='COD'?"#111":"#e0e0e0",borderRadius:20}} onPress={()=>setSelected('COD')}>
                <Text style={{textAlign:"center",paddingVertical:15,color:selected==="COD"?"#fff":"#111",fontWeight:600}}>Cash on Delivery</Text>
              </TouchableOpacity>
            </View>
            </View>
    </ScrollView>
    <View style={styles.nextPg}>
            {selected !== null &&
                  <View style={{backgroundColor:"#111",padding:10,flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems:"center"}}>
                    <View>
                      <Text style={{color:"white",fontSize:12,textTransform:"uppercase",fontFamily:"heading"}}>payment with {selected==="upi"?`${selected} ${selectPayment===null ? " " :selectPayment}`:`${selected}`} </Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() =>{navigation.navigate("orderSuccessful")}}>
                      <Text style={styles.btn}>Continue Payment</Text>
                    </TouchableOpacity>
                  </View>

                </View>
            }
            </View>
    </View>
    )
}
export default payment
const styles=StyleSheet.create({
  items:{
    flexDirection:"row",
    paddingHorizontal:20,
    alignItems:"center",
    justifyContent:"space-between",
    borderBottomWidth:3,
    borderColor:"#e0e0e0",
    paddingVertical:10,
    position:"relative",
    top:0,
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
  addressLocations:{
      textAlign:"center",
      fontFamily:"heading",
      textAlignVertical:"center"
  },
  address:{
      fontFamily:"desc-Bold"
  },
  priceTxt:{
    fontFamily:"Medium"
  },
  price:{
    fontSize:20,
    fontWeight:500
  },
  paymentList:{
    gap:10,
    flexDirection:"column",
    alignItems:"center",
    top:20
  },
  Upi:{
    width:"95%"
  },
  NetBanking:{
    width:"95%",
  },
  COD:{
    width:"95%",
  },
  UpiTypes:{
    flexDirection:"row",
    paddingTop:10,
    height:110,
    gap:10
  },
  type:{
    borderWidth:0.5,
    borderRadius:5,
    width:70,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    height:90,
    borderColor:"grey",
  },
  nextPg:{
    position:"absolute",
    // bottom:0,
    bottom:0,
    backgroundColor:"#111",
    width:"100%",
    flexDirection:"row",

  },
  btn:{
    backgroundColor:"#fff",
    textAlign:"center",
    borderRadius:10,
    padding:10
  }
})