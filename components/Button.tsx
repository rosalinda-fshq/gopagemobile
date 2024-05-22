import React from "react";
import { Pressable, Text, View } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  textColor: string;
  intent: "primary" | "secondary" | "tertiary" | "btnRed" | "btnOrange";
}

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  onPress,
  textColor,
  intent = "primary",
}) => {
  const buttonClasses = `py-4 px-4 rounded ${
    intent === "primary"
      ? "bg-[#a4c73a]"
      : intent === "secondary"
      ? "bg-white border-[#a4c73a]"
      : intent === "tertiary"
      ? "bg-[#4267B2]"
      : intent === "btnRed"
      ? "bg-[#DB4437]"
      : intent === "btnOrange"
      ? "bg-[#F79122]"
      : "bg-[#a4c73a]"
  } `;

  return (
    <View className="mx-2 mb-4">
      <Pressable onPress={onPress} className={buttonClasses}>
        <Text className={`${textColor} text-center text-lg font-semibold`}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
