import { View,Text, StyleSheet, ScrollView,Image, TouchableOpacity, FlatList} from 'react-native';

export const data = [
    {
      id: 1,
      name: "Rolex Submariner",
      brand: "Rolex",
      price: 12000,
      image: require("./../../assets/product3.png"),
      image1: require("./../../assets/product3.png"),
      image2: require("./../../assets/product3.png"),
      image3: require("./../../assets/product3.png"),
      category: "Luxury",
      more:[{
        id:1,
        image: require("./../../assets/product3.png"),
        color:"Grey",
        price:12000,
        stock:"In stock",
        stock_color:"green"
      },{
        id:2,
        image: require("./../../assets/product3.png"),
        color:"Blue",
        price:12000,
        stock:"In stock",
        stock_color:"green"
      },{
        id:3,
        image: require("./../../assets/product3.png"),
        color:"Black",
        price:12000,
        stock:"Only 1 left in stock",
        stock_color:"green"
      },{
        id:4,
        image: require("./../../assets/product3.png"),
        color:"Green",
        price:12000,
        stock:"Out of Stock",
        stock_color:"red"
      }],
      description: "A premium diving watch with a timeless design.",
    },
    {
      id: 2,
      name: "Omega Speedmaster",
      brand: "Omega",
      price: 5500,
      image: require("./../../assets/product3.png"),
      category: "Chronograph",
      description: "The legendary Moonwatch with a classic chronograph.",
    },
    {
      id: 3,
      name: "Fossil Grant",
      brand: "Fossil",
      price: 150,
      image: require("./../../assets/product.png"),
      category: "Casual",
      description: "Stylish leather strap watch with Roman numerals.",
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      brand: "Apple",
      price: 400,
      image: require("./../../assets/product.png"),
      category: "Smartwatch",
      description: "The latest Apple Watch with fitness tracking.",
    },
    {
      id: 5,
      name: "Casio G-Shock",
      brand: "Casio",
      price: 120,
      image: require("./../../assets/product.png"),
      category: "Sports",
      description: "Durable and shock-resistant watch for adventure lovers.",
    },
    
    {
        id: 6,
        name: "Dior Sauvage",
        brand: "Dior",
        price: 150,
        image: require("./../../assets/product.png"),
        category: "Men",
        description: "A fresh, spicy, and woody fragrance for men.",
    },
    {
        id: 7,
        name: "Gucci Bloom",
        brand: "Gucci",
        price: 130,
        image: require("./../../assets/product.png"),
        category: "Women",
        description: "Floral and feminine fragrance with jasmine and tuberose.",
    },
    {
        id: 8,
        name: "Armani Code",
        brand: "Giorgio Armani",
        price: 110,
        image: require("./../../assets/product.png"),
        category: "Men",
        description: "Elegant oriental scent with tonka bean and leather notes.",
    },
    {
        id: 9,
        name: "Chanel No. 5",
        brand: "Chanel",
        price: 200,
        image: require("./../../assets/product.png"),
        category: "Women",
        description: "Classic and sophisticated fragrance loved by millions.",
    },
    {
        id: 10,
        name: "Hugo Boss Bottled",
        brand: "Hugo Boss",
        price: 95,
        image: require("./../../assets/product.png"),
        category: "Men",
        description: "A modern fragrance with apple, cinnamon, and vanilla notes.",
    },          
  ];

function Home({navigation}) 
{
   
      
    return (
        <ScrollView style={styles.container}>
            <View style={styles.subContainer}></View>
            <View style={styles.greyContainer}></View>
            <Image source={require("./../../assets/image.png")} style={styles.mainImg}/>
            <Text style={styles.exploreTxt}>Explore</Text>
            
            <View style={styles.explore}>
                <TouchableOpacity onPress={()=>{navigation.navigate("explore")}}>
                    <View style={styles.perfumeContainer}>
                        <Image source={require("./../../assets/perfume.png")} style={{height:41,width:43}}/>
                        <Text style={{fontFamily:"desc-bold"}}>Perfume</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.watchesContainer}>
                        <Image source={require("./../../assets/watch.png")} style={{height:44,width:34}}/>
                        <Text>Watch</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.popularContainer}>
                <Text style={styles.popularsTxt}>Populars</Text>
                <TouchableOpacity>
                    <Text style={styles.showAll}>Show all</Text>
                </TouchableOpacity>
                </View>
            <View style={styles.watches}>
                
                <FlatList data={data.slice(0,5)} 
                keyExtractor={(item)=>item.id} 
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>{navigation.navigate("ProductDetails",{Prod:item})}}>
                    <View style={styles.popularItems}>

                    <Image source={require("./../../assets/product.png")} style={{height:100,width:100}}/>
                    <View style={styles.popularProdDetails}>

                    <View style={{marginLeft:5,marginBottom:3}}>
                        <Text style={{width:89,marginLeft:3,fontWeight:500}}>{item.name}</Text>
                        <Text style={{fontWeight:400}}>${item.price}</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.addPopularProd}>+</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    </TouchableOpacity>
                )} />

            </View>
            <View style={styles.newArrivalsContainer}>
                <Text style={styles.popularsTxt}>New Arrivals</Text>
                <TouchableOpacity>
                    <Text style={styles.showAll}>Show all</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.watches}>
                
                <FlatList data={data.slice(0,5)} 
                keyExtractor={(item)=>item.id} 
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    <View style={styles.newArrivalsItem}>

                    <Image source={require("./../../assets/product.png")} style={{height:100,width:100}}/>
                    <View style={styles.newArrivalsDetails}>

                    <View style={{marginLeft:5,marginBottom:3}}>
                        <Text style={{width:89,marginLeft:3,fontWeight:500}}>{item.name}</Text>
                        <Text style={{fontWeight:400}}>${item.price}</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.addNewArrivals}>+</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                )} />

            </View>
            <View style={{display:"flex",flexDirection:"row",backgroundColor:"#fff"}}>
                <Text style={styles.popularsTxt}>Products</Text>
            </View>
            <View style={styles.prod}>
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
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    subContainer:{
        height:200,
        backgroundColor:"#BFC0C2",
    },
    greyContainer:{
        backgroundColor:"#A6A7AB",
        height:100,
    },
    exploreTxt:{
        top:20,
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
        top:40,
        paddingLeft:30,
        gap:15,
        paddingBottom:50,
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
        backgroundColor:"#fff",
        height:80,
        width:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        gap:3,
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
    popularContainer:{
        flexDirection:"row",
        backgroundColor:"#F4F4F4",
        
    },
    popularItems:{
        backgroundColor:"white",
        width:130,
        height:173,
        marginHorizontal:10,
        borderRadius:20,
        justifyContent:"center",
        gap:10,
        alignItems:"center",
        borderColor:"#e0e0e0",
        borderWidth:1,
        // elevation:10,
        marginBottom:20,
        marginTop:20,
    },
    popularProdDetails:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        borderRadius:20,
        height:60
    },
    addPopularProd:{
        backgroundColor:"#111111",
        textAlign:"center",
        width:37,
        height:37,
        borderBottomRightRadius:20,
        color:"#fff",
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        fontSize:20,
        textAlignVertical:"center"
    },
    newArrivalsContainer:{
        flexDirection:"row",
        backgroundColor:"#F4F4F4"
    },
    newArrivalsItem:{
        backgroundColor:"white",
        width:130,
        height:170,
        marginHorizontal:10,
        borderRadius:20,
        justifyContent:"center",
        gap:10,
        alignItems:"center",
    },
    newArrivalsDetails:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        borderRadius:20,
        height:60
    },
    addNewArrivals:{
        backgroundColor:"#111111",
        textAlign:"center",
        width:37,
        height:37,
        borderBottomRightRadius:20,
        color:"#fff",
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        fontSize:20,
        textAlignVertical:"center"
    },
    prod:{
        backgroundColor:"#fff",
    },
    prodContainer:{
        backgroundColor:"#fff",
        width:160,
        height:210,
        display:"flex",
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
});

export default Home;
