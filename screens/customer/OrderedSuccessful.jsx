import { LinearGradient } from "expo-linear-gradient"
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function OrderSuccessful({navigation}) {
    useEffect(() => {
      const timer =setTimeout(() => {
        navigation.navigate("nav")
      }, 1000);
    }, [])
  return (
    <View style={styles.container}>
      <View style={styles.animationWrapper}>
        <LottieView
          source={require("./GIF.json")} 
          autoPlay
          loop={true}
          style={styles.lottie}
        />
        <LinearGradient 
          colors={["rgba(255,255,255,0.15)","rgb(50, 50, 50)"]}
          style={{height:100,width:100,position:"absolute",borderRadius:60,bottom:30,right:20}}
          start={{x:1,y:1}}
          end={{x:1,y:0.4}}
        />
        <LinearGradient 
          colors={["rgba(255,255,255,0.15)","rgb(50, 50, 50)"]}
          style={{height:100,width:100,position:"absolute",borderRadius:60,top:30,left:5}}
          start={{x:1,y:1}}
          end={{x:1,y:0.4}}
        />
        <LinearGradient 
          colors={["rgba(255,255,255,0.15)","rgb(50, 50, 50)"]}
          style={{height:200,width:200,position:"absolute",borderRadius:100,left:50,top:400}}
          start={{x:1,y:1}}
          end={{x:1,y:0.4}}
        />
        <LinearGradient 
          colors={["rgba(255,255,255,0.15)","rgb(50, 50, 50)"]}
          style={{height:200,width:200,position:"absolute",borderRadius:100,right:20,bottom:500}}
          start={{x:1,y:1}}
          end={{x:1,y:0.4}}
        />
        <Text style={styles.txt}>Ordered Successfully</Text>
      </View>
    </View>
  );
}

export default OrderSuccessful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  animationWrapper: {
    alignItems: "center",
  },
  lottie: {
    height: 500,
    width: 500,
  },
  txt: {
    color: "white",
    marginTop: 10,
    fontSize: 18,
    position:"absolute",
    fontFamily:"heading"
  },
});
