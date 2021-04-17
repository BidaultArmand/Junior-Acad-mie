import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";

const Search = () => {
  const [searchText, setSearchText] = React.useState("");
  function ChangeText(value) {
    setSearchText(value);
    console.log(searchText);
  }
  const data = require("../Helpers/PlatsData");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.TextInput}
          keyboardType="default"
          placeholder="Recherche..."
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.line_1} />
      <Image style={styles.image} source={require("../assets/Logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
  },
  header: {
    height: 50,
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    marginTop: 80,
  },
  TextInput: {
    fontWeight: "bold",
    fontSize: 35,
    width: "80%",
    marginLeft: "5%",
    color: "#37401a",
  },
  image: {
    width: 400,
    height: 420,
    marginTop: "40%",
    opacity: 0.3,
  },
  line_1: {
    backgroundColor: "#707070",
    width: "90%",
    height: 4,
    borderRadius: 30,
  },
});

export default Search;
