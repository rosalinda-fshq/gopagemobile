import Divider from "@/components/Divider";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { emailValidator } from "@/helpers/emailValidator";
import { passwordValidator } from "@/helpers/passwordValidator";
import { useState } from "react";
import { nameValidator } from "@/helpers/nameValidator";

const EmailSignup = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
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
      <Text className="text-gray-500">
        Sign up with <Text className="text-orange-500">Facebook , Google </Text>
        or <Text className="text-orange-500">mobile number</Text>
      </Text>
      <View>
        <TextInput
          label=" First Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
          placeholder="First name"
          placeholderTextColor="gray"
          className="text-gray-500  text-[18px] flex flex-row items-center justify-between bg-gray-200 py-4 px-4 rounded mb-4"
        />
        <TextInput
          label="Last Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
          placeholder="Last name"
          placeholderTextColor="gray"
          className="text-gray-500  text-[18px] flex flex-row items-center justify-between bg-gray-200 py-4 px-4 rounded mb-4"
        />
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
          placeholder="Email"
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
        <Pressable onPress={onSignUpPressed}>
          <Text className="text-orange-500 text-white text-center text-[18px]">
            Sign Up
          </Text>
        </Pressable>
      </View>
      <Divider length="100%" />
      <View className="flex flex-row gap-2 justify-center mt-4">
        <Text>Already have an account?</Text>
        <Pressable onPress={() => router.push("/login")}>
          <Text className="text-orange-500">Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmailSignup;
