// Navigation/Navigation.js

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import PageAccueil from '../Screen/PageAccueil'
import PageInscription from '../Screen/PageInscription'



const TabNavigator = createBottomTabNavigator({
  PageInscription: {
    screen: Inscription
  },
  PageAccueil: {
    screen: Accueil
  }
})

export default createAppContainer(SearchStackNavigator)