import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Text>Estamos HomeScreen</Text>
      <Button title="Ir a Ajustes" onPress={goToSettings} />
    </View>
  );
}
