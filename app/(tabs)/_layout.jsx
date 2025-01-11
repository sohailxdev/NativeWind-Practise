import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ color, focused, icon, name }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" ,width: 60 ,marginTop: 20}}>
      <Image
        source={icon}
        style={{
          resizeMode: "contain",
          tintColor: color,
          width: 24,
          height: 24,
          maxHeight: 24,
          maxWidth: 24,
        }}
      />
      <Text
        style={{
          color,
          fontFamily: focused ? "Poppins-SemiBold" : "Poppins-Regular",
          fontSize: 12,
          marginTop: 4,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.home}
              name="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.profile}
              name="Profile"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.plus}
              name="Create"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.bookmark}
              name="Bookmark"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
