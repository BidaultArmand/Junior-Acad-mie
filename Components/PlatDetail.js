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

function PlatDetail(props) {
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
      <TouchableOpacity
        style={styles.RegisterScreenButton}
        onPress={() =>
          props.navigation.navigate("Finalize", {
            plat: props.route.params.plat,
          })
        }
        underlayColor="#fff"
      >
        <Text style={styles.loginText}>Deconnexion</Text>
      </TouchableOpacity>
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
  RegisterScreenButton: {
    marginTop: 30,
    paddingTop: 10,
    marginLeft: "10%",
    marginRight: "50%",
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "#f5cc02",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    height: 45,
    width: 250,
    borderRadius: 20,
  },
});

export default PlatDetail;
