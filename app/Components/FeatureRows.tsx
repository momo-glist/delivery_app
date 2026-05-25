import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import RestaurantCards from "./RestaurantCards";

type featuresRowProps = {
  title: string;
  description: string;
  featuredCategory: string;
};

const FeatureRows = ({
  title,
  description,
  featuredCategory,
}: featuresRowProps) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Ionicons name="arrow-forward-outline" size={24} color="#16C47F" />
      </View>
      <Text className="text-gray-400 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        className="pt-3"
      >
        {/* Restaurants Cards */}

        <RestaurantCards
          id="1"
          img="https://i.ibb.co/3mPVrgQF/tania-melnyczuk-xe-Tv9-N2-Fj-XA-unsplash.jpg"
          title="Salade"
          description="Delicious food at affordable prices"
          genre="Salades"
          long={20}
          lat={0}
          dishes={["Salade de poulet", "Salade de thon", "Salade de légumes"]}
          address="123 Main St, Anytown, USA"
          rating={4.5}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRows;
