import { Image } from 'react-native';
import React from 'react';
import PageAccueil from "./Screen/PageAccueil";
import PageInscription from "./Screen/PageInscription";
import NavigationBar from "./Screen/Tabnavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from "./Screen/Profil";
import Search from './Screen/Search';
import Cook from './Screen/Cook';
import PlatItem from './Components/PlatItem';
import PlatDetail from './Components/PlatDetail';

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        
        <AppStack.Screen name="PageInscription" component={PageInscription}/>
        <AppStack.Screen name="Tabnavigator" component={TabNavigator}/>
        <AppStack.Screen name="PlatDetail" component={PlatDetail}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
function TabNavigator() {
  return(
    <AppTab.Navigator>
        <AppTab.Screen name="Accueil" component={PageAccueil} 
          options={{tabBarIcon: () => <Image source={require("./assets/Accueil.png")} style={{ height: 30, }}/>}} 
        />
        <AppTab.Screen name="Recherche" component={Search}
         options={{tabBarIcon: () => <Image source={require("./assets/Search.png")} style={{ height: 30, }}/>}} 
         />
        <AppTab.Screen name="Cook" component={Cook} 
        options={{tabBarIcon: () => <Image source={require("./assets/Cook.png")} style={{ height: 30, }}/>}} 
        />
        <AppTab.Screen name="Profil" component={Profil} 
        options={{tabBarIcon: () => <Image source={require("./assets/Profil.png")} style={{ height: 30, }}/>}} 
        />
      </AppTab.Navigator>
  )
}

export default App

