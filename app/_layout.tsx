import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerTintColor: "#111111",
          headerTitleStyle: { color: "#111111" },
          headerShadowVisible: false,
          headerTransparent: false,
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerStyle: { backgroundColor: "#ffffff" },
            headerTintColor: "#111111",
            headerTitleStyle: { color: "#111111" },
            headerShadowVisible: false,
            headerTransparent: false,
          }}
        />
      </Stack>
    </>
  );
}
