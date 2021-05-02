import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

function Finalize(props) {
  console.log("ecranfinalize///////");
  console.log(props);
  const { plat } = props;
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.button}>
        <Button
          style={styles.backButton}
          title="back"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <Text>{props.route.params.plat.title}</Text>
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

export default Finalize;
