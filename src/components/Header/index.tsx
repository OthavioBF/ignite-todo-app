import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Rocket } from "phosphor-react";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Rocket size={24} />
        <Text style={styles.title}>Todo</Text>
      </View>
    </View>
  );
}
