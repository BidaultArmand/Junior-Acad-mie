import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, ImageBackground, newValue } from 'react-native'


const Search = () => {
     
    const [searchText, setSearchText] = React.useState("");
     
    const data = require('../Helpers/PlatsData');
     
    const onRunSearch = () => {
        const searchTextNormalize = searchText.trim().toLocaleLowerCase();
         
        
        const resultSearch = data.filter(currentData => (
            currentData.name.toLocaleLowerCase() === searchTextNormalize
        ));
         
        console.log(resultSearch);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    keyboardType= 'default'
                    placeholder= 'Recherche'
                    onTextChange={newValue = () => setSearchText(newValue)}
                    onSubmitEditing={onRunSearch}
                />
            </View>
        <View style={styles.line_1}/>
            <Image style={styles.image} source={require("../assets/Logo.png")}/>
        </View>
    
        )
    } 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5%',
    },
    header: {
        height: 50,
        justifyContent: 'space-between',
        width: '80%',
        flexDirection: 'row',
        marginTop: 80,
    },
    TextInput: {
        fontWeight: 'bold'

    },
    image: {
        width: 400,
        height: 420,
        marginTop: "40%",
        opacity: 0.3
    },
    line_1: {
        backgroundColor: '#707070',
        width: '80%',
        height: 4,
        borderRadius: 30,
    },
})

export default Search