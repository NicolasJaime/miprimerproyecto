import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{/*
        headerStyle:{
          backgroundColor: "White",
        },*/
        headerShown: false,
        statusBarStyle: 'dark',
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}