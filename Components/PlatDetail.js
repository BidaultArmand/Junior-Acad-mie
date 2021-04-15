import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

function PlatDetail(props) {
  console.log(props);
  return (
    <SafeAreaView style={styles.main_container}>
      <Text>Détail du plat</Text>
      <Button title="back" onPress={() => props.navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
});

export default PlatDetail;
