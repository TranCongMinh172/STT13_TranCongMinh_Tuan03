
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
        <View style ={styles.top}>
            <Image source={require("../assets/khoa.png")} style={styles.image} />
        </View>
        <View style= {styles.center}>
            <text style={styles.font}>FORGET</text>
            <text style={styles.font}>PASSWORD</text>
            <text style={styles.font1}> Provide your account’s email for which you want to reset your password</text>
            <View style={styles.bottom} >
            <Feather
            style = {styles.editicon}
                name="mail"
                size={30}
                color="black"
                
            
                
        />
                <input style={styles.input} placeholder="            Email" >
                </input>
                <button style={styles.button}>NEXT</button>
            </View>
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
    "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    marginTop: 35,
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180, 
    marginLeft: 40
  },
  center: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
    margin:10
  },
  font:{
    textAlign:"center",
    fontSize: 24,
    fontWeight: 600,
    top: 10000
  },
  font1:{
    marginTop:50,
    textAlign:"center",
    fontSize: 18,
    fontWeight:600,
    
   
  },
  bottom:{
    flex:1,
    marginTop: 23,
    marginLeft:0
    


  },
  input:{
    marginLeft:25,
   backgroundColor: "#d2cfce",
   width:320,
   height:50,
   border:"none",
    fontSize: 17,
    fontWeight: 400,
    marginTop: -20
  },
  button:{
    backgroundColor: "rgba(218, 200, 0, 1)",
    width: 320,
    height: 50,
    border: "none",
    margin: 25, 
    fontWeight:600,
    marginTop:40
  }, 
  editicon:{
    left:34,
    top: 23
  }
});
