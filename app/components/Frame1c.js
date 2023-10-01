import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from "react";

export default function Frame1c() {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.font}>CODE</Text>
        </View>
        <View style ={styles.center}>
            <Text style={styles.font1}>VERIFICATION</Text>
            <Text style={styles.font2}>Enter ontime password sent on ++849092605798</Text>
            <View style={styles.view}>
                <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
                <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
                <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
                <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
                <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
                <View style={{ borderWidth: 1, width: 50, height: 50 }}></View>
            </View>
        </View>
        <View style ={styles.bottom}>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.font3}>VERIFY CODE</Text>
            </TouchableOpacity> 
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
   alignItems: 'center',
   justifyContent: 'center',
  },

  font:{
    marginTop:50,
    textAlign:"center",
    fontSize: 50,
    fontWeight: 750,
  },
  font1:{
    marginTop:30,
    textAlign:"center",
    fontSize: 20,
    fontWeight: 700,
  },
  font2:{
    marginTop:80,
    width: "75%",
    textAlign:"center",
    fontSize: 17,
    fontWeight: 700,
  },
  view:{
    flexDirection: "row",
     marginTop: 40
  },
  center: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
  },
  bottom:{
    flex :1,
    marginTop: 0,
  },
  button:{
    marginTop: 60,
          backgroundColor: "rgba(227, 192, 0, 1)",
          width: 340,
          height: 40,
          alignItems: "center",

  },
  font3:{
    fontWeight: 700, 
    fontSize: 20,
    marginVertical: "auto"
  },
});