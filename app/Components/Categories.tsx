import React from "react";
import { ScrollView } from "react-native";
import CardCategories from "./CardCategories";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 0, paddingTop: 10 }}
    >
      <CardCategories
        imageUrl="https://i.ibb.co/S7rjknRr/jakub-dziubak-i-OHJKJq-O6-E0-unsplash.jpg"
        title="Suchis"
      />
      <CardCategories
        imageUrl="https://i.ibb.co/ycCvMpgY/amirali-mirhashemian-jh5-Xy-K4-Rr3-Y-unsplash.jpg"
        title="Burgers"
      />
      <CardCategories
        imageUrl="https://i.ibb.co/yF0KNPGn/shourav-sheikh-a66s-Gf-Onnq-Q-unsplash.jpg"
        title="Pizzas"
      />
      <CardCategories
        imageUrl="https://i.ibb.co/ZRHx54x1/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg"
        title="Bowls"
      />
      <CardCategories
        imageUrl="https://i.ibb.co/MkSh7Q3H/ben-lei-fl-Fd8-L7-B3g-unsplash.jpg"
        title="Pâtes"
      />
      <CardCategories
        imageUrl="https://i.ibb.co/KxzRQbsr/heather-barnes-Wb-Zesfqw-R-A-unsplash.jpg"
        title="Desserts"
      />
      <CardCategories
        imageUrl="https://i.ibb.co/fVxQdHRr/joseph-gonzalez-fdl-ZBWIP0a-M-unsplash.jpg"
        title="Sandwichs"
      />
      <CardCategories
        imageUrl="https://i.ibb.co/3mPVrgQF/tania-melnyczuk-xe-Tv9-N2-Fj-XA-unsplash.jpg"
        title="Salades"
      />
    </ScrollView>
  );
};

export default Categories;
