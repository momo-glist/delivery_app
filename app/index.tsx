import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "./Components/Categories";
import FeatureRows from "./Components/FeatureRows";

export default function Index() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="mx-4 flex-row items-center space-x-2 pb-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-16 w-16 rounded-full bg-gray-200 p-4"
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Delivery now!</Text>
          <View className="flex-row items-center">
            <Text className="text-xl font-bold">Current location</Text>
            <Ionicons name="chevron-down" size={16} color="#000" />
          </View>
        </View>
        <Ionicons name="person-outline" size={24} color="#16C47F" />
      </View>

      {/* Search */}
      <View className="flex-row items-center pb-2 mx-1 space-x-2 px-4">
        <View className="flex-row items-center flex-1 mx-1 h-12 bg-gray-300 px-2">
          <Ionicons name="search" size={24} color="#16C47F" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <Ionicons name="options-outline" size={24} color="#16C47F" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-200"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Categories */}

        <Categories />

        {/* Featured Rows */}
        <FeatureRows
          title="Featured"
          description="Get it quick"
          featuredCategory="Burgers"
        />
        <FeatureRows
          title="Featured"
          description="Get it quick"
          featuredCategory="Burgers"
        />
        <FeatureRows
          title="Featured"
          description="Get it quick"
          featuredCategory="Burgers"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
