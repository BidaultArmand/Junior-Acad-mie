import React from "react";
import { useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import AppContext from "../Components/AppContext";

const PageInscription = ({ navigation }) => {
  const Context = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <TextInput
          style={styles.TextInput}
          keyboardType="default"
          placeholder="Nom..."
        />

        <TextInput
          style={styles.TextInput}
          keyboardType="default"
          placeholder="Prénom..."
        />

        <TextInput
          style={styles.TextInput}
          keyboardType="default"
          placeholder="...@isep.fr"
        />

        <TextInput
          style={styles.TextInput}
          keyboardType="default"
          placeholder="Téléphone"
        />

        <TextInput
          style={styles.TextInput}
          keyboardType="default"
          placeholder="Adresse Postale"
        />
        <View style={styles.line}></View>

        <TouchableOpacity
          style={styles.RegisterScreenButton}
          onPress={() => Context.SetIsLoggedIn(true)}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>S'INSCRIRE</Text>
        </TouchableOpacity>
      </View>

      <Image source={require("../assets/easyfood.png")} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  container2: {
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",

    justifyContent: "space-around",
  },

  input: {
    height: 40,
    margin: 20,
    borderWidth: 0,
  },

  TextInput: {
    margin: 20,

    borderBottomWidth: 1,
    width: 250,
  },
  RegisterScreenButton: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
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
  loginText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    flexDirection: "row",
    resizeMode: "stretch",
    alignSelf: "flex-end",
    alignItems: "center",
    opacity: 0.4,
    position: "absolute",
  },
});

export default PageInscription;
