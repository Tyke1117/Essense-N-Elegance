import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as ImagePicker from "expo-image-picker";
function addProducts({navigation}) {
    const [addressPlace, setaddressPlace] = useState("Perfume")
    const [addVariant, setAddVariant] = useState(null);
    const [img, setImg] = useState(null)
    console.log(addressPlace)
    const navi = useNavigation();
    async function pickImageAsync() {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:["images"],
          allowsEditing: true,
          quality: 1,
          
        });
        setImg(result.assets[0].uri)
    if (result.canceled) {
       Alert.alert("Please select an Image");
    }};  
    console.log(img)
        const [variants, setVariants] = useState([
          { id: 1, color: '', price: '', description: '' },
        ]);
      
        const handleAddVariant = () => {
          const newVariant = {
            id: variants.length + 1,
            color: '',
            price: '',
            description: '',
          };
          setVariants([...variants, newVariant]);
        };
      
        const handleRemoveVariant = (id) => {
          const filteredVariants = variants.filter((variant) => variant.id !== id);
          setVariants(filteredVariants);
        };
      
        const handleInputChange = (id, field, value) => {
          const updatedVariants = variants.map((variant) => {
            if (variant.id === id) {
              return { ...variant, [field]: value };
            }
            return variant;
          });
          setVariants(updatedVariants);
        };
      
      

    return(
        <ScrollView>
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Update Your Product Details</Text>
                <TouchableOpacity onPress={pickImageAsync}>
                    {img===null ?
                    <View style={styles.addImg}>
                    <Image source={require("./../../assets/addImage.png")} style={{height:50,width:50}}/>
                    <Text style={styles.txt}>Add Image of Product</Text>
                    </View>
                    :
                        <Image source={{uri:img}} style={{height:200}}/>
                    }
                </TouchableOpacity>
                <View style={styles.type}>
                    <TouchableOpacity onPress={()=>setaddressPlace("Perfume")}>
                        <Text style={[styles.typesHead,addressPlace === "Perfume"?{backgroundColor:"white",elevation:15,borderWidth:0.5,borderColor:"grey"}:{backgroundColor:"#e0e0e0"}]}>Perfume</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setaddressPlace("Watch")}>
                        <Text style={[styles.typesHead,addressPlace === "Watch"?{backgroundColor:"white",elevation:15,borderWidth:0.5,borderColor:"grey"}:{backgroundColor:"#e0e0e0"}]}>Watch</Text>
                    </TouchableOpacity>    
                </View>
                <View>
                    <Text style={styles.detailsHead}>Product name</Text>
                    <TextInput style={styles.houseNo} multiline/>
                </View>
                <Text style={styles.detailsHead}>Brand name</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>Price</Text>
                <TextInput style={styles.houseNo} multiline/>
                <Text style={styles.detailsHead}>Description</Text>
                <TextInput style={styles.houseNo} multiline/>
                
        <View>

        {variants.map((variant) => (
            <View key={variant.id}>
            <Text style={[styles.detailsHead,{fontSize:20,paddingVertical:10}]}>Variant {variant.id}</Text>
            <Text style={[styles.detailsHead,{color:"grey"}]}>Color</Text>
                            <TextInput style={styles.houseNo} multiline 
                            value={variant.color}
                onChangeText={(text) => handleInputChange(variant.id, 'color', text)}/>
                            <Text style={[styles.detailsHead,{color:"grey"}]}>Price</Text>
                            <TextInput style={styles.houseNo} multiline
                            value={variant.price}
                            onChangeText={(text) => handleInputChange(variant.id, 'price', text)}/>
                            <Text style={[styles.detailsHead,{color:"grey"}]}>Description</Text>
                            <TextInput style={styles.houseNo} multiline
                            value={variant.description}
                            onChangeText={(text) => handleInputChange(variant.id, 'description', text)}/>
                            <TouchableOpacity style={styles.remove} onPress={() => handleRemoveVariant(variant.id)}>
                                <Text style={styles.sendTxt}>Remove Variant</Text>
                            </TouchableOpacity>
            </View>
            ))}
      <TouchableOpacity style={{alignSelf:"flex-end"}} onPress={handleAddVariant}>
      <Text style={{fontFamily:"Medium",width:100}}>+ Add Variant</Text>
      </TouchableOpacity>
    </View>

                <TouchableOpacity style={styles.send}>
                    <Text style={styles.sendTxt}>Update Product</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}
export default addProducts

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        marginBottom:50
    },
    addImg:{
        height:200,
        backgroundColor:"#e0e0e0",
        flexDirection:"column",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        gap:10
    },
    txt:{
        fontFamily:"desc-Bold",
        fontSize:12
    },
    heading:{
        fontFamily:"heading"
    },
    houseNo:{
        backgroundColor:"#e0e0e0",
        color:"black",
        borderRadius:10,
        textAlignVertical:"top",
        padding:10
    },
    send:{
        backgroundColor:"#111",
        borderRadius:10,
        top:10
    },
    remove:{
        backgroundColor:"#ED3419",
        borderRadius:10,
        top:10,
        marginBottom:10
    },
    sendTxt:{
        color:"#fff",
        padding:8,
        textAlign:"center",
        fontWeight:500
    },
    type:{
        flexDirection:"row",
        gap:20,
        marginVertical:20
    },
    typesHead:{
        fontFamily:"heading",
        fontSize:12,
        backgroundColor:"#e0e0e0",
        paddingVertical:7,
        paddingHorizontal:15,
        borderRadius:7
    },
    detailsHead:{
        fontFamily:"Medium",
    }
})