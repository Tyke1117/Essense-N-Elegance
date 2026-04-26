import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Switch, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function adminProfile() {
  const navigation = useNavigation();
  const logout =()=> Alert.alert('Logout','Are you sure you want to logout',[
    {
      text:"Yes",
      onPress:()=>navigation.replace("Login")
    },
    {
      text:"No",
    }
  ])
    const [allowNotification, setallowNotification] = useState(false);
    const [isLight, setisLight] = useState(false);
    const notifications = () => setallowNotification(previousState => !previousState)
    const theme = () => setisLight(previousState => !previousState)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileCard}>
          <Image
            style={styles.pic}
          />
          <Text style={styles.name}>Pari</Text>
          <Text style={styles.email}>chudasamapari05@gmail.com</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btnTxt}>Notifications</Text>
          <Switch 
            trackColor={{false:"#111",true:"green"}}
            thumbColor={allowNotification ? "white" : "white"}
            onValueChange={notifications}
            value={allowNotification}
        />
        </View>
        

        <View style={styles.btn}>
          <Text style={styles.btnTxt}>Theme</Text>
          <Switch 
            trackColor={{false:"#111",true:"white"}}
            thumbColor={isLight ? "black" : "white"}
            onValueChange={theme}
            value={isLight}
        />
        </View>

        <TouchableOpacity style={styles.redbtn}>
          <Text style={styles.redTxt}>Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.redbtn} onPress={logout}>
          <Text style={styles.redTxt}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
export default adminProfile
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#000',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
  email: {
    color: 'gray',
    marginTop: 4,
  },
  btn: {
    backgroundColor: '#eaeaea',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 16,
  },
  redbtn: {
    backgroundColor: '#ffeaea',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
  },
  redTxt: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
});