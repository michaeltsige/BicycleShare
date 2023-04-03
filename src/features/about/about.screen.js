import {
Linking,
StyleSheet,
Text,
TouchableOpacity,
View,
Image,
SafeAreaView
} from "react-native";
import { SafeArea } from  "../../components/utility/safe-area.component";

import React from "react";

export const About = () => {
return (
<SafeArea>

<View style={styles.aboutContainer}>
<Text style={styles.mainHeader}> Ebrahim | Michael  </Text>
<Text style={styles.paraStyle}> Design Project - I </Text>

<View>
  <Image
    style={styles.imgStyle}
    source={{
      uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    }}
  />
</View>

<View style={styles.aboutLayout}>
  <Text style={styles.aboutSubHeader}> About Us </Text>
  <Text style={[styles.paraStyle, styles.aboutPara]}>
    We are second year students (B.Tech Cse) in Hindustan Institute of Technology.
    This is a project for the course Design Project-I
  </Text>
</View>

<Text style={styles.mainHeader}> Contact Us </Text>

<View style={styles.menuContainer}>
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() =>
      Linking.openURL("")
    }>
    <Image
      style={styles.iconStyle}
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      }}
    />
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() =>
      Linking.openURL(
        ""
      )
    }>
    <Image
      style={styles.iconStyle}
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
      }}
    />
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => Linking.openURL("")}>
    <Image
      style={styles.iconStyle}
      source={{
        uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
      }}
    />
  </TouchableOpacity>
</View>
</View>
</SafeArea>


);
};

const styles = StyleSheet.create({
aboutContainer: {
display: "flex",
alignItems: "center",
},

imgStyle: {
width: 150,
height: 150,
borderRadius: 100,
},
mainHeader: {
fontSize: 18,
color: "#344055",
textTransform: "uppercase",
fontWeight: "500",
marginTop: 10,
marginBottom: 10,
},
paraStyle: {
fontSize: 18,
color: "#7d7d7d",
paddingBottom: 30,
},
aboutLayout: {
backgroundColor: "#4c5dab",
paddingHorizontal: 30,
paddingVertical: 0,
marginVertical: 10,
},
aboutSubHeader: {
fontSize: 18,
color: "#fff",
textTransform: "uppercase",
fontWeight: "500",
marginVertical: 15,
fontFamily: "JosefinSans_700Bold",
alignSelf: "center",
},
aboutPara: {
color: "#fff",
},
menuContainer: {
width: "100%",
flexDirection: "row",
justifyContent: "space-evenly",
},

iconStyle: {
width: "100%",
height: 50,
aspectRatio: 1,
},
});
