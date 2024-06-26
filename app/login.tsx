import Divider from "@/components/Divider";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "index" }],
    });
  };

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="relative pt-14 pb-12 px-14">
      <View className="relative left-72">
        <Pressable
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "index" }],
            })
          }
        >
          <Ionicons name="close-outline" size={24} color="black" />
        </Pressable>
      </View>
      <Text className="text-xl text-center mb-8 text-gray-500">
        Welcome Back
      </Text>
      <View className="flex  w-full justify-center gap-y-4">
        <Link href="/signup" asChild className="bg-[#4267B2] py-4 px-4 rounded">
          <Pressable>
            <Text className="text-white text-center text-[18px]">
              Continue with Facebook
            </Text>
          </Pressable>
        </Link>
        <Link href="/login" asChild className="bg-[#DB4437] py-4 px-4 rounded">
          <Pressable>
            <Text className="text-white text-center text-[18px]">
              Continue with Google
            </Text>
          </Pressable>
        </Link>
      </View>
      <View className="flex flex-row items-center gap-2 py-6">
        <Divider length="50%" />
        <Text>or</Text>
        <Divider length="50%" />
      </View>
      <View
        className={`flex flex-row items-center justify-between bg-gray-200 py-4 px-4 rounded ${
          email.error ? "mb-0" : "mb-4"
        }`}
      >
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email or Mobile Number"
          placeholderTextColor="gray"
          className="text-gray-500  text-[18px]"
        />
      </View>
      {email.error ? (
        <Text className="text-red-500  mb-4">{email.error}</Text>
      ) : null}
      <View
        className={`flex flex-row items-center justify-between bg-gray-200 py-4 px-4 rounded ${
          password.error ? "mb-0" : "mb-4"
        }`}
      >
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry={!showPassword}
          placeholder="Password"
          placeholderTextColor="gray"
          className="text-gray-500  text-[18px]"
        />
        <Pressable onPress={toggleShowPassword}>
          <Text className="text-gray-500 uppercase text-[12px] underline">
            {showPassword ? "hide" : "show"}
          </Text>
        </Pressable>
      </View>
      {password.error ? (
        <Text className="text-red-500  mb-4">{password.error}</Text>
      ) : null}
      <View className="bg-[#a4c73a] py-4 px-4 rounded">
        <Pressable onPress={onLoginPressed}>
          <Text className="text-orange-500 text-white text-center text-[18px]">
            Log In
          </Text>
        </Pressable>
      </View>
      <View className="flex flex-row gap-2 justify-center mt-4">
        <TouchableOpacity onPress={() => router.push("/resetPassword")}>
          <Text className="text-orange-500 text-[16px]">
            Forgot your password ?
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row gap-2 justify-center mt-4">
        <Text className="text-[16px]">Don't have an account?</Text>
        <Pressable onPress={() => router.push("/signup")}>
          <Text className="text-orange-500 text-[16px]">Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
