import Divider from "@/components/Divider";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Signup = () => {
  return (
    <View className="relative pt-14 pb-12 px-14">
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
      <View className="flex  w-full justify-center gap-y-4">
        <Link href="/signup" asChild className="bg-[#a4c73a] py-4 px-4 rounded">
          <Pressable>
            <Text className="text-white text-center text-[18px]">
              Sign up with Email
            </Text>
          </Pressable>
        </Link>
        <Link href="/login" asChild className="bg-[#a4c73a] py-4 px-4 rounded">
          <Pressable>
            <Text className="text-white text-center text-[18px]">
              Sign up with Mobile number
            </Text>
          </Pressable>
        </Link>
      </View>
      <View className="flex flex-row gap-2 justify-center mt-4">
        <Text>Already have an account?</Text>
        <Link href="/login" asChild>
          <Pressable>
            <Text className="text-orange-500">Log in</Text>
          </Pressable>
        </Link>
      </View>
      <View className="flex flex-row items-center gap-2 py-8">
        <Divider length="100%" />
      </View>
    </View>
  );
};

export default Signup;
