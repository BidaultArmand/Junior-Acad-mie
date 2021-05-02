import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import PageAccueil from "./Screen/PageAccueil";
import PageInscription from "./Screen/PageInscription";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profil from "./Screen/Profil";
import Search from "./Screen/Search";
import Cook from "./Screen/Cook";
import PlatDetail from "./Components/PlatDetail";
import AppContext from "./Components/AppContext";
import Finalize from "./Screen/Finalize";
const AppStack = createStackNavigator();
const AppStackNewNavigator = createStackNavigator();
const AppTab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
        style: {
          height: "10%",
          paddingTop: 10,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Accueil") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Profil") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <AppTab.Screen
        name="Accueil"
        component={PageAccueil}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/Accueil.png")}
              style={styles.image}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Recherche"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/Search.png")}
              style={styles.image}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Cook"
        component={Cook}
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/Cook.png")} style={styles.image} />
          ),
        }}
      />
      <AppTab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/Profil.png")}
              style={styles.image}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}
function newNavigator() {
  return (
    <AppStackNewNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AppStackNewNavigator.Screen
        name="Tabnavigator"
        component={TabNavigator}
      />
      <AppStackNewNavigator.Screen name="OrderMenue" component={PlatDetail} />
      <AppStackNewNavigator.Screen name="Finalize" component={Finalize} />
    </AppStackNewNavigator.Navigator>
  );
}
function App() {
  //GlobalState
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  //Variable Accessible
  const Parameters = {
    UserLogged: isLoggedIn,
    SetIsLoggedIn,
  };
  return (
    <AppContext.Provider value={Parameters}>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          {!isLoggedIn ? (
            <AppStack.Screen
              name="PageInscription"
              component={PageInscription}
            />
          ) : (
            <AppStack.Screen name="newNavigator" component={newNavigator} />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
export default App;
