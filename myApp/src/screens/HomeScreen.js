import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Button title="Ir a Ajustes" onPress={goToSettings} />
    </SafeAreaView>
  );
}
