import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text>Estamos SettingsScreen</Text>
      <Text>Estamos SettingsScreen</Text>
      <Text>Estamos SettingsScreen</Text>
      <Text>Estamos SettingsScreen</Text>
      <Text>Estamos SettingsScreen</Text>
      <Text>Estamos SettingsScreen</Text>
      <Text>Estamos SettingsScreen</Text>
      <Text>Estamos SettingsScreen</Text>
      <Text>Estamos SettingsScreen</Text>
      <Button onPress={() => goToPage("Home")} title="Ir a Home" />
    </SafeAreaView>
  );
}
