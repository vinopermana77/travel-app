import { View, Text, TouchableOpacity, Image , TextInput} from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { sortCategoryData } from "../constant";
import { theme } from "../theme";

const SortCategories = () => {
    const [activeSort, setActiveSort] = useState('Popular')
    return (
        <View className="space-y-5">
            <View className="mx-5 mt-2 flex-row justify-between items-center">
                <Text className="text-xl font-bold text-neutral-800">
                    Sort Categories
                </Text>
            </View>
            {/* Search Bar */}
        <View className="mx-3 mb-3">
          {/* <View className="flex-row items-center bg-neutral-200 rounded-full p-4 space-x-2 pl-6"> */}
          <View className="flex-row items-center justify-around" style={{
            width: '100%',
            height: 60,
            borderRadius: 100 / 2,
            backgroundColor: '#f5f5f5',
          }}>
            {sortCategoryData.map((sort,index) => {
                let isActive = sort==activeSort
                let btnActive = isActive ? 'bg-white shadow' : ''

                return (
                    <TouchableOpacity onPress={() => setActiveSort(sort)} key={index} className={`px-4 p-3 rounded-full flex ${btnActive}`}>
                        <Text style={{color: isActive ? theme.text : 'black'}}>{sort}</Text>
                    </TouchableOpacity>
                )
            })}
          </View>
        </View>
        </View>
    );
};

export default SortCategories;
