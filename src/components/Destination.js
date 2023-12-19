import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { destinationData } from '../constant'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Destinations = () => {
    const navigation = useNavigation();
    return (
        <View>
            {destinationData.map((dest) => {
                return (
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Place')} className="mx-5 mt-3 flex-row justify-between items-center">
                            <Image source={dest.image} className="rounded-3xl"
                                style={{
                                    width: '100%',
                                    height: 300,
                                }} />
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

export default Destinations