import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import "../global.css";

const CustomButton = ({ containerStyle }) => {
  return (
    <TouchableOpacity
      className={`bg-orange-300  rounded-xl justify-center items-center ${containerStyle} `}
      //   style={{backgroundColor: "#FFA001", minHeight: 62, borderRadius: 12, justifyContent: "center", alignItems: "center", ...containerStyle}}
    >
      <Text className=" text-4xl  font-bold">Custom Button</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
