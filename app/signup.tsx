import ButtonComponent from "@/components/Button";
import Divider from "@/components/Divider";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View className="relative pt-14 pb-12 px-14">
      <View className="flex w-full justify-center gap-y-4">
        <ButtonComponent
          text="Continue with Facebook"
          textColor="text-white"
          intent="tertiary"
          onPress={() => navigation.navigate("signup")}
        />
        <ButtonComponent
          text=" Continue with Google"
          textColor="text-white"
          intent="btnRed"
          onPress={() => navigation.navigate("signup")}
        />
      </View>
      <View className="flex flex-row items-center gap-2 py-6">
        <Divider length="50%" />
        <Text>or</Text>
        <Divider length="50%" />
      </View>
      <View className="flex  w-full justify-center gap-y-4">
        <ButtonComponent
          text="  Sign up with Email"
          textColor="text-white"
          intent="primary"
          onPress={() => navigation.navigate("emailSignup")}
        />
        <ButtonComponent
          text="Sign up with Mobile number"
          textColor="text-white"
          intent="primary"
          onPress={() => navigation.navigate("login")}
        />
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
