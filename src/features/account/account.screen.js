import {
StyleSheet,
Text,
View,
Image,
} from "react-native";
import { SafeArea } from  "../../components/utility/safe-area.component";

import React from "react";

export const Account = () => {
return (
<SafeArea>

<View style={styles.aboutContainer}>
<Text style={styles.mainHeader}> User </Text>

<View>
    <Image
    style={styles.imgStyle}
    source={{
        uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    }}
    />
</View>

<View style={styles.aboutLayout}>
    <Text style={styles.aboutSubHeader}> Details </Text>
    <View style={styles.aboutPara}>
        <Text>UserId: 23nuh459bfg85b3334534343</Text>
        <Text>Public Key: 78654353459030534053433465</Text>
    </View>
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
paddingBottom: 30,
},
aboutLayout: {
paddingHorizontal: 30,
paddingVertical: 0,
marginVertical: 10,
paddingTop:10
},
aboutSubHeader: {
fontSize: 18,
textTransform: "uppercase",
fontWeight: "500",
marginVertical: 15,
fontFamily: "JosefinSans_700Bold",
alignSelf: "center",
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
