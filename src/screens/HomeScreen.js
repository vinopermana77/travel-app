import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Platform, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../components/Categories';
import SortCategories from '../components/SortCategories';
import Destinations from '../components/Destination';

const ios = Platform.OS == 'ios'
const topMargin = ios ? 'mt-3' : 'mt-10'

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6" + topMargin}>
        {/* Avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text style={{ fontSize: wp(7) }} className="font-bold">Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="mx-3 mb-3">
          {/* <View className="flex-row items-center bg-neutral-200 rounded-full p-4 space-x-2 pl-6"> */}
          <View className="flex-row items-center" style={{
            width: '100%',
            paddingLeft: 20,
            height: 40,
            borderRadius: 100 / 2,
            backgroundColor: '#f5f5f5',
          }}>
            <Icon name='search' size={20} />
            <TextInput className="mx-3" placeholder='Search destination...' placeholderTextColor={'gray'} />
          </View>
        </View>

        {/* Category */}
        <View className="mb-3">
          <Categories />
        </View>

        {/* Sort Category */}
        <View className="mb-3">
          <SortCategories />
        </View>

        {/* Sort Category */}
        <View className="mb-3">
          <Destinations />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}