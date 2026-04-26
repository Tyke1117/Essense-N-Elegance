import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function orderRecipt(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.companyHeader}>
                    <QRCode 
                    value='110919012023'
                    />
                    <Text style={{fontFamily:"heading",fontSize:20,}}>Essence & Elegance</Text>
                    <Text style={{fontFamily:"heading"}}>Invoice:<Text >#1109-1711</Text></Text>
                </View>
                <View style={styles.prodPayment}>
                    <Text style={{fontFamily:"heading",fontSize:20,}}>$6,400</Text>
                    <Text>Order Date:11:09 12th April 2025</Text>
                </View>
            </View>
            <View style={styles.transactionDetails}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Date:</Text>
                    <Text style={styles.bold}>April 12,2025</Text>
                </View>

                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Payment Type:</Text>
                    <Text style={styles.bold}>COD</Text>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Recipt No:</Text>
                    <Text style={styles.bold}>110919012023</Text>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Customer Name:</Text>
                    <Text style={styles.bold}>John</Text>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Customer Address:</Text>
                    <Text style={styles.bold}>1,Xyz Street,ABC society,Junagadh,Gujarat</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    companyHeader:{
        alignItems:"center"
    },
    prodPayment:{
        alignItems:"center"
    },
    txtContainer:{
        flexDirection:"row",
        width:"100%",
        padding:10,
        paddingHorizontal:20,
        justifyContent:"space-between"
    },
    txt:{
        fontSize:13,
        fontFamily:"heading",
        color:"grey"
    },
    bold:{
        fontFamily:"heading",
        color:"black",
        width:"50%",
        textAlign:"right"
    },
    transactionDetails:{
        marginTop:10,
        borderTopWidth:1,
        borderColor:"black",
        height:300,
        width:"100%",
        borderStyle:"dashed",
    }
});

export default orderRecipt;
