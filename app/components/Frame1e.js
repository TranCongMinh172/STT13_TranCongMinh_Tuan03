import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default function Frame1e() {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <text style={{ marginTop:20,
                        textAlign:"center",
                        fontSize: 35,
                        fontWeight: 750,}}>REGITER</text>
        </View>
        <View style={{marginBottom:150,}}>
            <TextInput placeholder='Name' style={styles.input}></TextInput>
            <TextInput placeholder='Phone' style={styles.input}></TextInput>
            <TextInput placeholder='Email' style={styles.input}></TextInput>
            <TextInput placeholder='Password' style={styles.input}></TextInput>
            <TextInput placeholder='Birthday' style={styles.input}></TextInput>
        </View>
        <View style={{
          flexDirection: "row",
          flex: 1,
        }}>
            <TouchableOpacity>
                <View style={{flexDirection: "row", marginTop:-130, marginLeft:-120}}>
                    <View style={styles.radio}></View>
                    <Text style={styles.radioText}>Male</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{flexDirection: "row",marginTop:-130}}>
                    <View style={styles.radio}></View>
                    <Text style={styles.radioText}>Female</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 17, marginTop: 15, fontWeight: 400,textAlign:"center",padding:10 }}>
          When you agree to terms and conditions
        </Text>
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
  input:{
    margin:10,
    width: 330,
    height: 54,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(242, 242, 242, 1)", 
  },
  radio: {
    height: 20,
    width: 20,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    marginLeft: 10,
  },
  radioText: {
    fontSize: 18,
    fontWeight: 400,
    marginLeft: 10,
  },
  btn:{
   
    width: 330,
    height: 54,
    marginTop: -120,
    borderWidth: 1,
    backgroundColor:"#F25726",
    border:"none"
  },
  txt:{
    fontWeight: 700, 
    fontSize: 25,
     color: "white",
     marginHorizontal:"auto",
     marginVertical:"auto"
  },
});