import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function WelomeScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
      {/* Background */}
      <Image
        source={require("../../assets/images/welcome.png")}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      />

      {/* Content */}
      <View style={{ paddingLeft: 10, paddingBottom: 20, marginTop: 32 }}>
        {/* <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp(100), height: hp(60) }}
          className="absolute bottom-0"
        /> */}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: wp(10),
              color: "white",
              fontWeight: "bold",
              textShadowColor: "rgba(0, 0, 0, 0.2)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
              marginBottom: 10,
            }}
          >
            Go Explore The Whole World!
          </Text>
          <TouchableOpacity style={{
            backgroundColor: '#1f75ff',
            padding: 20,
            width: '50%',
            borderRadius: 100 / 2,
          }} onPress={() => navigation.navigate('Home')}>
            <Text className="font-bold text-center text-white" style={{
              fontSize: wp(6), textShadowColor: "rgba(0, 0, 0, 0.2)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}>
              Let's Go
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
