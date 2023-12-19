import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { theme } from "../theme";
import { categoriesData } from "../constant";

const Categories = () => {
  return (
    <View className="space-y-5">
      <View className="mx-5 mt-2 flex-row justify-between items-center">
        <Text className="text-xl font-bold text-neutral-800">Categories</Text>
        <TouchableOpacity>
          <Text style={{ color: theme.text }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} className="space-x-4">
        {categoriesData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-2"
            >
              <Image
                source={cat.image}
                className="rounded-3xl"
                style={{
                  width: 118,
                  height: 118,
                }}
              />
              <Text className="font-medium text-neutral-800">{cat.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
