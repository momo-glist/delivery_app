import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

type CardCategoriesProps = {
  imageUrl: string;
  title: string;
};

const CardCategories = ({ imageUrl, title }: CardCategoriesProps) => {
  return (
    <TouchableOpacity className="relative">
      <Image source={{ uri: imageUrl }} className="h-20 w-20 rounded m-1" />
      <Text className="absolute bottom-1 left-2 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CardCategories;
