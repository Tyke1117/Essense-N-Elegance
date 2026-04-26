import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
function search({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <AntDesign name="search1" size={20} color={"white"} />
        </TouchableOpacity>

        <TextInput
          style={styles.searchInput}
          placeholder="Search Items..."
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          multiline
          placeholderTextColor={"#e0e0e0"}
        />
      </View>
      <Text style={styles.heading}>Popular Searches</Text>
      <View style={styles.searchOptions}>
      <TouchableOpacity>
        <Text style={styles.typesHead}>Titan</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.typesHead}>Zenith</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.typesHead}>Rolex</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.typesHead}>Gucci</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.typesHead}>Fogg</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.typesHead}>Bella Vita</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#fff",
    marginTop:20
  },
  heading:{
    fontFamily:"heading",
    width:"100%",
    paddingLeft:20,
    paddingBottom:10
  },
  searchBar: {
    backgroundColor: "#232323",
    flexDirection: "row",
    width: "90%",
    paddingLeft: 5,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 15,
  },
  searchbtn: {
    height: 25,
    width: 25,
  },
  searchInput: {
    backgroundColor: "#232323",
    borderRadius: 10,
    width: "80%",
    color:"white"
  },
  typesHead:{
    fontFamily:"desc-Bold",
    fontSize:12,
    backgroundColor:"#f7f7f7",
    paddingVertical:3,
    paddingHorizontal:17,
    borderRadius:7,
    color:"grey",
    borderWidth:0.4,
    borderColor:"grey"
  },
  searchOptions:{
    flexDirection:"row",
    gap:10,
    justifyContent:"flex-start",
    width:"100%",
    flexWrap:"wrap",
    paddingHorizontal:20
  }
});
