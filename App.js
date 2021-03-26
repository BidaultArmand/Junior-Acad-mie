
import React from 'react';
import { Texte } from 'react-native'
import PageAccueil from "./Screen/PageAccueil";
import PageInscription from "./Screen/PageInscription";
import NavigationBar from "./Screen/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="PageInscription" component={PageInscription}/>
        <AppStack.Screen name="PageAccueil" component={PageAccueil}/>
      </AppStack.Navigator>
      
    </NavigationContainer>
  )
}


export default App
