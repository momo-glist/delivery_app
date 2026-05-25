import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type RestaurantCardsProps = {
  id: string;
  img: string;
  title: string;
  description: string;
  genre: string;
  long: number;
  lat: number;
  dishes: string[];
  address: string;
  rating: number;
};

const RestaurantCards = ({
  id,
  img,
  title,
  description,
  genre,
  long,
  lat,
  dishes,
  address,
  rating,
}: RestaurantCardsProps) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-slate-200">
      <Image source={{ uri: img }} className="w-64 h-40 rounded-sm" />
      <View className="pb-4 px-4">
        <Text className="font-bold pt-2 text-lg">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-1 px-2">
        <Ionicons name="star" size={20} color="#B6CBBD" opacity={0.5} />
        <Text>
          <Text className="text-yellow-500">{rating.toFixed(1)}</Text> - {genre}
        </Text>
      </View>
      <View className="flex-row items-center space-x-1 px-2">
        <Ionicons name="map-outline" size={20} color="gray" opacity={0.5} />
        <Text>
          <Text className="text-gray-400">{address}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
