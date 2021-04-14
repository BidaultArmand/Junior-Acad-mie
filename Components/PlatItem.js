import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class PlatItem extends React.Component {
  render() {
    const{ plat, displayDetailForPlat } = this.props
    return (
      <TouchableOpacity
        onPress={() => displayDetailForPlat(plat.id)}
        style={styles.main_container}
        underlayColor='#37401a'>
        <Image
          style={styles.image}
          source={{uri: "image"}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{plat.title}</Text>
            <Text style={styles.localisation}>{plat.localisation}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{plat.description}</Text>
            
          </View>
          <View style={styles.date_container}>
            <Text style={styles.price}>{plat.price}</Text>
          </View>
        </View>
        <View style={styles.line}></View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 500,
    flexDirection: 'column'
  },
  image: {
    width: "100%",
    height: 250,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 1,
    flexDirection: 'column'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 26,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    color: "#37401a"
  },
  localisation: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#666666',
    flex: 1
  },
  description_container: {
    flex: 1
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  price: {
    textAlign: 'center',
    fontSize: 14
  },
  line: {
    height: 2,
    backgroundColor: '#707070'
  }
})

export default PlatItem