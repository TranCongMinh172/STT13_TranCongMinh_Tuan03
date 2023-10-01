import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput } from 'react-native';


export default function Frame2a() {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.font}>LOGIN</Text>
        </View>
        <View style ={{marginBottom:300}}>
            <TextInput placeholder='Name' style={styles.input}></TextInput>
            <TextInput placeholder='Password' style={styles.input}></TextInput>
        </View>
        <View >
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btn1}>
            <Text style={styles.txt1}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex : 1,
    marginTop: 50,
    marginLeft:-150
  },
  font:{
    marginTop:50,
    textAlign:"center",
    fontSize: 50,
    fontWeight: 750,
  },
  input:{
    margin:10,
    width: 330,
    height: 54,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(242, 242, 242, 1)", 
  },
  btn:{
   
    width: 330,
    height: 54,
    marginTop: -250,
    borderWidth: 1,
    backgroundColor:"black",
    border:"none"
  },
  btn1:{
   
    width: 330,
    height: 54,
    marginTop: 30,
    borderWidth: 1,
    backgroundColor: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",

    border:"none"
  },
  txt:{
    fontWeight: 700, 
    fontSize: 25,
     color: "white",
     marginHorizontal:"auto",
     marginVertical:"auto"
  },
  txt1:{
    fontWeight: 700, 
    fontSize: 25,
     color: "black",
     marginHorizontal:"auto",
     marginVertical:"auto"
  },
  
});