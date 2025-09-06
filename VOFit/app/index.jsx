import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/img/VOFit1.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img}/>
      <Text style={styles.title}>Fitness..For Voiceover Artistes!</Text>
  
    

    </View>
  )
}

export default Home

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