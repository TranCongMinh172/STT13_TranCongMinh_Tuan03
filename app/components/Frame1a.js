import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Frame1a() {
  return (
    <View style = {styles.container}>
            <View style = {styles.top}>
                    <View style = {styles.circle}></View>
            </View>
            <View style = {styles.center}>
                    <View>
                        <text style={styles.font}>GROW</text>
                        <text style={styles.font}>YOUR BUSINESS</text>
                        <text style={styles.font1}>We will heltext you to grow your business using online server</text>
                    </View>
            </View>
            <View style = {styles.bottom}>
                <div>
                <button style={styles.button}>LOGIN</button>
                <button style={styles.button}>SIGN UP</button>
                </div>
                <text style={styles.txt}>HOW WE WORK</text>
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
  top: {
    flex : 1,
    marginTop: 50,
    alignItems: "center",
  },
  circle: {
    borderRadius : 100,
    borderWidth: 15,
    width : 140,
    height: 140

  },
  center: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
  },
  font:{
    textAlign:"center",
    fontSize: 24,
    fontWeight: 600,
  },
  font1:{
    marginTop:50,
    textAlign:"center",
    fontSize: 18,
    lineHeight:1,
    fontWeight:600,
  },
  bottom:{
    flex :1,
    marginTop: 0,


  },

  button:{
    backgroundColor: "rgba(218, 200, 0, 1)",
    width: 140,
    height: 40,
    border: "none",
    margin: 25, 
    fontWeight:600
  },
  txt:{
    textAlign:"center",
    fontWeight: 600
  }
 
});