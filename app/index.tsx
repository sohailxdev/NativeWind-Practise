import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../constants/images";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full flex-1">
      <ScrollView contentContainerStyle={{height: "100%"}} style={{height: "100%"}}>
        <View className="px-4 w-full min-h-[90vh] items-center justify-center ">
          <Image
            source={Images.logo}
            className="w-[130px] h-[84px] "
            resizeMode="contain"
          />

          <Image
            source={Images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-white text-center text-5xl font-bold mt-4">
              Discover Endless Possibilites with{" "}
              <Text className="text-secondary-100">Aora</Text>
            </Text>
            <Image
              source={Images.path}
              className="w-[136] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular  mt-4 text-center" style={{ color: "gray" }}>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora{" "}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
