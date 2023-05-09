import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import theme from '../../assets/themes/index';
import Avatars from "./Avatars";
const Card = ({ item , navigation }) => {
  return (
    <ImageBackground
      source={item.background}
      style={styles.imageBackgound}
    >
      <Pressable onPress={()=>navigation.navigate("Shared Album",{album:item})} >
        <View style={styles.imageContentContainer}>
          <View>
            <Text style={styles.imageTitle}>{item.title}</Text>
            <Text
              style={styles.imageSubTitle}
            >{`Created by ${item.user}`}</Text>
          </View>
          <View>
            {/* Avatars go here */}
            <Avatars avatars={item.avatars}/>
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
    imageBackgound:{
        resizeMode:"cover",
        overflow:"hidden",
        height:theme.imageHeight.s,
        marginTop:theme.spacing.m,
        paddingHorizontal:theme.spacing.m,
        borderRadius:theme.borderRadius.m,
        justifyContent:"center",
    },
imageContentContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
},
imageTitle:{
    ...theme.textVariants.h1,
    color:theme.colors.white,
},
imageSubTitle:{
    ...theme.textVariants.body2,
    color:theme.colors.white,
},
});
export default Card;
