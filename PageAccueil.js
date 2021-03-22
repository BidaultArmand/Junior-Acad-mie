import React from 'react'
import {View, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Text, ImageBackground, Image} from 'react-native'


const PageAccueil = () => {

       
      
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./easyfood.png')} style={styles.image}/>
      <View style={styles.container2}>
        <TextInput style={styles.TextInput}
          keyboardType= 'default'
            placeholder="Nom..."
        />
          <View style={styles.line}></View>
        <TextInput style={styles.TextInput}
          keyboardType= 'default'
          placeholder="Prénom..."
        />
          <View style={styles.line}></View>
        <TextInput style={styles.TextInput}
          keyboardType= 'default'
          placeholder="...@isep.fr"
        />
          <View style={styles.line}></View>
        <TextInput style={styles.TextInput}
          keyboardType= 'default'
          placeholder="Téléphone"
        />
         
          <View style={styles.line}></View>
        <TextInput style={styles.TextInput}
          keyboardType= 'default'
          placeholder="Adresse Postale"
        />
        <View style={styles.line}></View>
      </View>
      <View>
        <TouchableOpacity
                style={styles.RegisterScreenButton}
                onPress={() => navigate('Accueil')}
                underlayColor='#fff'>
            <Text style={styles.loginText}>S'INSCRIRE</Text>
        </TouchableOpacity>
        
        
      </View>
      
          
        


    </SafeAreaView>
        
        );
      };
      
      const styles = StyleSheet.create({
        container:{
          flex: 1,
          flexDirection: "column"

        },
        
        container2: {
          marginTop: '50%',

        },
        
        input: {
          height: 40,
          margin: 20,
          borderWidth: 0,

        },
        line: {
          height: 1,
          backgroundColor: 'black',
           
          marginLeft: '10%',
          marginRight: '10%',
        },

        TextInput: {
          margin: 20,
          marginLeft: '10%',
        },
        Button: {
          margin: 60,
          color: 'black',
          
        },
        RegisterScreenButton:{
          marginRight:40,
          marginLeft:40,
          marginTop:30,
          paddingTop:10,
          paddingBottom:10,
          backgroundColor:'#f5cc02',
          shadowColor: "#000",
          shadowOffset: {
	        width: 0,
	        height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
          elevation: 14,
        },
        loginText:{
            color:'#fff',
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
        },
        image:{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          alignItems:"center",
        }
      });

  export default PageAccueil;