import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ProfilInfo from "../Helpers/InfoProfil";
import AppContext from "../Components/AppContext";

function Profil() {
  const Context = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Profil</Text>
        <View>
          <Image style={styles.image} source={require("../assets/Logo.png")} />
        </View>
      </View>
      <View style={styles.line_1} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scrollview}
      >
        <Image
          style={styles.profil_image}
          source={require("../assets/Profil.jpg")}
        />
        <Text style={styles.name}>Armand Bidault</Text>
        <View style={styles.line_2} />
        <Text style={styles.text_1}>Etudiant</Text>
        <Text style={styles.text_2}>Paris</Text>
        <Text style={styles.text_3}>Description du profil, ...</Text>
        <View style={styles.line_2} />
        <Text style={styles.text}>Message ></Text>
        <View style={styles.line_2} />
        <Text style={styles.text_stars}>4,8 étoiles</Text>
        <Text style={styles.text_commentaire}>Commentaires ></Text>
        <View style={styles.line_2} />
        <Text style={styles.text_historique}>Historique des plats ></Text>
        <TouchableOpacity
          style={styles.RegisterScreenButton}
          onPress={() => Context.SetIsLoggedIn(false)}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>Deconnexion</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: "5%",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",

    height: 130,
    width: "100%",
    justifyContent: "space-between",
  },
  text_header: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: "5%",
    marginTop: 80,
    color: "#707070",
    marginRight: "39%",
  },
  image: {
    height: 80,
    width: 80,
    marginRight: "5%",
    marginTop: 50,
  },
  line_1: {
    backgroundColor: "#707070",
    width: "90%",
    height: 4,
    borderRadius: 30,
  },
  profil_image: {
    height: 200,
    width: 200,
    borderRadius: 360,
    borderWidth: 3,
    borderColor: "#707070",
    marginTop: 40,
    marginLeft: "25%",
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 40,
    color: "#707070",
    marginLeft: "15%",
  },
  line_2: {
    backgroundColor: "#707070",
    width: "70%",
    height: 2,
    borderRadius: 30,
    marginLeft: "15%",
    marginTop: 20,
  },
  text_1: {
    color: "#707070",
    fontSize: 18,
    marginTop: 30,
    marginLeft: "15%",
  },
  text_2: {
    color: "#707070",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "15%",
  },
  text_3: {
    color: "#707070",
    fontSize: 18,
    marginBottom: 30,
    marginLeft: "15%",
  },
  text: {
    color: "#707070",
    fontSize: 18,
    marginTop: 20,
    marginLeft: "15%",
  },
  text: {
    color: "#707070",
    fontSize: 18,
    marginTop: 20,
    marginLeft: "15%",
  },
  text_stars: {
    color: "#707070",
    fontSize: 18,
    marginTop: 20,
    marginLeft: "35%",
  },
  text_commentaire: {
    color: "#707070",
    fontSize: 18,
    marginTop: 40,
    marginLeft: "15%",
  },
  text_historique: {
    color: "#707070",
    fontSize: 18,
    marginTop: 40,
    marginLeft: "15%",
    marginBottom: 40,
  },
  scrollview: {
    flex: 1,
    width: "100%",
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
});

export default Profil;
