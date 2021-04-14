import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';


function Cook() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Postez votre plat</Text>
                    <View>
                        <Image style={styles.image} source={require("../assets/Logo.png")}/>
                    </View>
                
            </View> 
                <View style={styles.line_1}/> 
            <View style={styles.container_2}>
                <ScrollView style={styles.scrollview}>
                    <View style={styles.container_3}>
                        <View>
                        <TextInput style={styles.text_input}
                            keyboardType= 'default'
                            placeholder= 'Titre...'
                        />
                        <TextInput style={styles.text_input}
                            keyboardType= 'numeric'
                            placeholder= 'Nombre de personne...'
                        />
                        <TextInput style={styles.text_input}
                            keyboardType= 'default'
                            placeholder= 'Style de cuisine...'
                        />
                        <TextInput style={styles.text_input}
                            keyboardType= 'default'
                            placeholder= 'Localisation...'
                        />
                        </View>
                        <View style={styles.image_input}>
                            <Text style={styles.text_addPhoto}>+ Photo</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.container_4}>
                            <TouchableOpacity
                                style={styles.RegisterScreenButton}
                                underlayColor='#fff'>
                                <Text style={styles.loginText}>POSTER</Text>
                            </TouchableOpacity>
                        </View>
            </View> 
        </View>
    
        )
    } 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: '5%',
        alignItems: 'center'
    },
    container_2: {
        flex: 2,
        width: '90%',
    },
    container_3: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '14%',
    },
    scrollview: {
        flex: 1, 
        height: 20,
        backgroundColor: 'magenta'
        
    },
    header: {
        flexDirection: 'row',
        height: 130,
        width: '100%',
        justifyContent: 'space-between',
    },
    text_header: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: 80,
        color : '#707070',
        marginRight: '7%'
    },
    image: {
        height: 80,
        width: 80,
        marginRight: '5%',
        marginTop: 50
    },
    line_1: {
        backgroundColor: '#707070',
        width: '90%',
        height: 4,
        borderRadius: 30,
    },
    text_input: {
        borderBottomWidth: 1,
        borderColor: '#707070',
        width:'130%',
        marginTop: 30,
        marginBottom: 30
    },
    image_input: {
        height: 110,
        width: 110,
        backgroundColor: "#707070",
        borderColor: "#F5CD05",
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: '30%',
        marginTop: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_addPhoto: {
        color: '#F5CD05',
        fontWeight: 'bold',
    
    },
    RegisterScreenButton:{
         
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
        height: 45,
        width: 250,
        borderRadius: 20
    },
    loginText:{
          color: 'black',
          fontWeight: "bold",
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
      container_4: {
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'pink',
          marginTop: '25%'
      }
})

export default Cook