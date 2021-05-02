import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  Image,
  TouchableHighlight,
} from "react-native";
import plats from "../Helpers/PlatsData";
import PlatItem from "../Components/PlatItem";

function PageAccueil(props) {
  console.log(props);
  return (
    <View styles={styles.container}>
      <View style={styles.Header}>
        <Image style={styles.image} source={require("../assets/Logo.png")} />
        <View style={styles.bloc}>
          <TextInput style={styles.textinput} placeholder="Localisation" />
          <Button title="Rechercher" onPress={() => {}} />
        </View>
      </View>
      <FlatList
        style={styles.flatlist}
        data={plats}
        renderItem={({ item }) => (
          <PlatItem plat={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    borderColor: "#707070",
    borderWidth: 2,
  },
  Header: {
    flexDirection: "row",
    marginTop: "10%",
  },
  bloc: {
    justifyContent: "center",
    width: "70%",
  },
  flatlist: {
    marginBottom: 200,
    height: "100%",
  },
});

export default PageAccueil;
