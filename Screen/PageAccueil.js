

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import plats from '../Helpers/PlatsData'
import PlatItem from '../Components/PlatItem'


function PageAccueil() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Localisation'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
          data={plats}
          
          renderItem={({item}) => <PlatItem plat={item}/>}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default PageAccueil