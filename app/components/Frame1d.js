import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, Image } from 'react-native';


export default function Frame1d() {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.font}>LOGIN</Text>
        </View>
        <View style={styles.center}>
            <TextInput placeholder='Email' style={styles.input} ></TextInput>
            <TextInput placeholder='Password' style={styles.input1} ></TextInput>

            <View>
                <TouchableOpacity style={styles.btnlogin}>
                    <Text style={styles.txtlogin}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.font2}>
                    <Text>When you agree to terms and conditions</Text>
                    <p ><a href='http://localhost:19009/'>For got your password? </a></p >
                    <Text>Or login with</Text>
                </View>
            </View>
            <View style={styles.img}>
            <View >
                <Image style ={styles.image}    source={require("../assets/iconface.png")}>
                   
                </Image>
            </View>
            <View >
                <Image style={styles.image}  source={require("../assets/iconzalo.png")}>
                    
                </Image>
            </View>
            <View  >
                <Image  style={styles.image}  source={require("../assets/icongoogle.png")}>
                    
                </Image>
            </View>
        </View>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(49, 170, 82, 0.19)", 
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex : 1,
    marginTop: 20,
    alignItems: "center",
  },
  font:{
    marginTop:20,
    textAlign:"center",
    fontSize: 35,
    fontWeight: 750,
  },
  center:{
    marginBottom: 400,
  },
  input:{
    marginTop:70,
    width: 330,
    height: 54,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(242, 242, 242, 1)", 
  },
  input1:{
    marginTop:30,
    width: 330,
    height: 54,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(242, 242, 242, 1)",
    
  },
  txtlogin:{
    fontWeight: 700, 
    fontSize: 25,
     color: "white",
     marginHorizontal:"auto",
     marginVertical:"auto"
  },
  btnlogin:{
   
    width: 330,
    height: 54,
    marginTop: 60,
    borderWidth: 1,
    backgroundColor:"#F25726",
    border:"none"
  },
  font2:{
    marginTop:20,
    alignItems:"center",
    justifyContent:"space-around"
  },
  image: {
    width: 90,
    height: 60, 
    
  },
  img:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:70
  }
});