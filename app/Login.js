import React,{useState} from "react";
import { TextInput } from "react-native";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet,Switch,StatusBar } from "react-native";
export default (props) => {
   
    const [isPasswordHidden, setIsPasswordHidden] = useState(true); // giá trị ban đầu của password
    const Show_Pass =()=> { // hàm hiển thị password
        setIsPasswordHidden(!isPasswordHidden);
    }
    const [isRemembered, setIsRemembered] = useState(false);// giá trị ban đầu của switch

  const toggleSwitch = (value) => { // value là giá trị của switch
    setIsRemembered(value);
  };
return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>  
            <View style={styles.row_Header}>
                <Text style={styles.text}>
                    {"<"}
                </Text>
                <Text style={styles.text_signin}>
                    {"Sign In"}
                </Text>
                <Text>{""}</Text>{/* dùng để căn lề cho text ở giữa */}
                

            </View> 
            <View>
                <Text style={styles.text_Welcome }>
                    {"Welcome to"}
                </Text>
            </View>
           {/* <View>
                <Text style={styles.text_Bold}>
                        {""}
                </Text>
           </View> */}
              <View>
                <Text style={styles.text_Nomarl}>
                        {"Enter your Phone number or Email address for sign in . Enjoy your food ."}
                </Text>
              </View>
            <View style={styles.column}>
                <View style={styles.view}>
                    <View style={styles.create_Boder}>
                        <View style={styles.View_Input}>
                            <Image
                                source = {{uri: "https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-4/256/user-1024.png"}} 
                                resizeMode = {"stretch"}
                                style={styles.image}
                            />
                            <TextInput
                                placeholder = {"Username"}
                               style={styles.Text_Input}
                            />
                        </View>
                    
                    </View>
                </View>
            </View>
            <View style={styles.column}>
                    <View style={styles.create_Boder}>
                        <View style={styles.View_Input}>
                            <Image
                                source = {{uri: "https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-3/256/lock-simple-light-1024.png"}} 
                                resizeMode = {"stretch"}
                                style={styles.image}
                            />
                            <TextInput
                                placeholder = {"Password"}
                                secureTextEntry={isPasswordHidden}
                               style={styles.Text_Input}
                            />
                            <TouchableOpacity onPress={Show_Pass}>
                                <Image
                                    source = {{uri: "https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-2/256/eye-slash-light-1024.png"}} 
                                    resizeMode = {"stretch"}
                                    style={styles.icon_Eye}
                                    
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            <View style={styles.row_Remember}>
                <View style={styles.Text_Remember}>
                    <Switch style={styles.Switch} value={isRemembered}
        onValueChange={toggleSwitch} trackColor={{false: "green", true: "yellow"}} thumbColor="#fff"></Switch>
                    <Text style={styles.TextRemember}>{"Remember Me"} </Text>  
                </View>
                <View style={styles.Text_Remember}>
                <Text style={styles.Textgreen}>{"Forget Password !"}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.Text_Enter}>
                    {"Sign In"}
                </Text>
            </TouchableOpacity>
            <View style={styles.row_CreateAccount}>
                 <Text>
                    {"Don't have on account?"}
                </Text>
                <Text style={styles.Textgreen}>
                    {" Signup"} 
                </Text>
             </View>
             <View style={styles.row_OR}>
                <Text style={styles.text_OR}>
                    {"OR"}
                </Text>
            </View>
            <View style={styles.view5}>
                <View style={styles.row4}>
                    <TouchableOpacity style={[styles.button_Connect,{backgroundColor:"#004C99"}] } onPress={()=>alert('Pressed!')}>
                       <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-04-1024.png"} }
                       resizeMode={"stretch"}
                       style={styles.image_FB_GG}/>
                        <Text style={styles.text_FB_GG}>
                        {"Connect With Facebook"}
                    </Text>
                    <Text>{""}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button_Connect,{backgroundColor:"#3399ff"}] } onPress={()=>alert('Pressed!')}>
                       <Image source={{uri: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-1024.png"} }
                       resizeMode={"stretch"}
                       style={styles.image_FB_GG}/>
                        <Text style={styles.text_FB_GG}>
                        {"Connect With Google"}
                         </Text>
                    <Text>{""}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>

)
};


//----------------------------------CSS----------------------------------////


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#FFFFFF",

},
scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF"
},


//ROW
row_Header: {
   flexDirection: "row",
    justifyContent: "space-between",// dùng căn lề cho text ở giữa
    alignItems: "center",
	marginTop: 14,
	marginBottom: 50,
	marginHorizontal: 9,
     
},


View_Input:{ // view chứa icon và input
    flexDirection: "row",
		alignItems: "center",
		borderRadius: 8,
		marginHorizontal: 15,

},



row_Remember: {// dùng để căn lề cho component sang 2 ben
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    marginHorizontal: 15,
    marginLeft: 25
  
},

row_OR:{
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
},


row_CreateAccount:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
},

Text_Remember:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
},
//----------------------------------TEXT----------------------------------////
//TEXT
text: {
    color: "#0B0B0B",
    fontSize: 23,
    //marginRight: 122,
 
    
},  
text_signin: {
   
    color: "#0A0A0B",
    fontSize: 18,
    fontWeight: "bold",
   
    
},  
text_Welcome: {
    color: "#101011",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
    marginLeft: 12,
    
},
// text_Bold:{
//     color: "#101011",
//     fontSize: 15,
//     fontWeight: "bold",
//     marginBottom: 5,
//     marginLeft: 14,
    
// },
text_Nomarl: {
    color: "#535655",
    fontSize: 15,
    marginBottom: 35,
    marginLeft: 14,
    marginRight: 60,
},

Text_Input: { // input
    flex: 1,
    color: "#92908E",
    fontSize: 15,
    fontWeight: "bold",
    height: 40,
    paddingVertical: 8, //
},


TextRemember: {// Chữ Remember Me
    color: "#A4A4A4",
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 5,
},

Textgreen: { // chữ Forget Password
   
    color: "green",
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 5,
},

Text_Enter:{
    color: "#F2F8F8",
		fontSize: 18,
		fontWeight: "bold",
},

text_OR:{
    color: "#6C6C6C",
    fontSize: 16,
		fontWeight: "bold",
},

text_FB_GG:{
    color: "#F7F8FC",
    fontSize: 13,
    fontWeight: "bold",
    marginVertical: 7,
    marginLeft: 40,
},

///----------------------------------IMAGE----------------------------------////
image: { // 
    width: 30,
    height: 30,
    marginRight: 17,
    backgroundColor: "#F8F7F7",
    borderRadius: 3,
    
},

icon_Eye:{ // icon mắt 
    width: 30,
    height: 30,
    marginLeft: 17,
},

image_FB_GG:{
    borderRadius: 3,
    width: 30,
    height: 30,
    marginLeft: 25,
    backgroundColor: "#F8F7F7",
    
},
///----------------------------------Other----------------------------------////

//Input
column: { //  căn lề cho input + bo goc
    borderRadius: 16,
    marginBottom: 20,
    marginHorizontal: 13,
},
// view: { //
//     backgroundColor: "#F8F7F7",
//     borderColor: "#F8F8F8",
//     borderRadius: 16,
//     borderWidth: 3,
 
// },
create_Boder: { // tạo border cho input
    backgroundColor: "#F8F7F7",
    borderColor: "#F5F5F7",
    borderRadius: 16,
    borderWidth: 3,
    paddingVertical: 5, //
    marginHorizontal: 2,
},




//Switch
Switch: { 
    width: 35,
    height:24,
},


//------------Button-----------------//
button: {
    alignItems: "center",
    backgroundColor: "#077F7B",
    borderColor: "#2F9491",
    borderRadius: 12,
    borderWidth: 3,
    paddingVertical: 15,
    marginBottom: 24,
    marginHorizontal: 15,
},


button_Connect:{
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#C7CDDF",
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 6,
    marginBottom: 24,
    marginHorizontal: 15, 
},



});
