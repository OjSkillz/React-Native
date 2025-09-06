import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    img: {
      height: 200,
      width: 200,
      borderColor: 'rgba(25, 24, 94, 0.72)',
      borderWidth: 0.5,
      borderRadius: 10,
      backgroundColor: "rgba(17, 2, 2, 0.1)"

    },
    title: {
      fontWeight: 'bold',
      fontSize: '18',
      fontStyle: 'italic',
      marginTop: 20
    },
})