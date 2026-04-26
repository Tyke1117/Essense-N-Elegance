import { LinearGradient } from "expo-linear-gradient"
import { useEffect } from "react"
import { Text, View } from "react-native"

function Logout({navigation}) {
    useEffect(() => {
      navigation.replace("Login");
    }, [])
    return null
}
export default Logout