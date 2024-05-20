import Divider from "@/components/Divider";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { emailValidator } from "@/helpers/emailValidator";
import { useState } from "react";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate("login");
  };
  return (
    <View className="relative pt-14 pb-12 px-8 space-y-4">
      <View className="relative left-80">
        <Pressable
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "login" }],
            })
          }
        >
          <Ionicons name="close-outline" size={24} color="black" />
        </Pressable>
      </View>
      <Text className="text-xl">Reset Password</Text>
      <Text className="text-gray-500">
        Enter the email address associated with your account, and we'll email
        you a link to reset your password
      </Text>
      <View
        className={`flex flex-row items-center justify-between bg-gray-200 py-4 px-4 rounded`}
      >
        <TextInput
          label="Email"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="gray"
          description="You will receive an email with the reset link."
        />
      </View>
      <View className="flex flex-row justify-between items-center">
        <Pressable
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "login" }],
            })
          }
          className="flex flex-row items-center"
        >
          <Ionicons name="chevron-back-outline" size={20} color="orange" />
          <Text className="text-orange-500 text-[16px]">Back to login</Text>
        </Pressable>
        <Pressable
          onPress={sendResetPasswordEmail}
          className="bg-[#a4c73a] py-4 px-4 rounded"
        >
          <Text className="text-white text-center text-[16px]">
            Send Reset Link
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResetPassword;
