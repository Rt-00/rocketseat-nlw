import { Feather } from "@expo/vector-icons";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import Logo from "../assets/logo.svg";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();

  function login() {
    if (!username || !password) {
      Alert.alert("Ops", "Dados inválidos para login");
      return;
    }

    if (username === "rtoledo" && password === "blahblahblah") {
      navigate("Home");
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <View className="items-center mt8">
        <Logo />
      </View>
      <View className="mt-6">
        <Text className="text-white font-semibold text-xl mb-3">Username</Text>
        <TextInput
          className="bg-zinc-900 h-12 pl-4 rounded-lg text-white border-2 border-zinc-800 focus:border-violet-700"
          onChangeText={setUsername}
          value={username}
        />
      </View>

      <View className="mt-6">
        <Text className="text-white font-semibold text-xl mb-3">Password</Text>
        <TextInput
          className="bg-zinc-900 h-12 pl-4 rounded-lg text-white border-2 border-zinc-800 focus:border-violet-700"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        className="w-full h-14 items-center justify-center flex-row rounded-md mt-6 bg-green-600"
        onPress={login}
      >
        <Feather name="check" size={20} color={colors.white} />
        <Text className="text-white font-semibold text-base ml-2">
          Confirmar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
