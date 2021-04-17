import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

function PlatDetail(props) {
  console.log(props);
  const { plats } = props;
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.button}>
        <Button
          style={styles.backButton}
          title="back"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <Text>bbbb</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: "column",
  },
  button: {
    flexDirection: "row",
  },
  backButton: {},
});

export default PlatDetail;
