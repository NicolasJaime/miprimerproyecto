import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'


const HelloWorldText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🔥🔥Hola Mundo 🔥🔥</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "beige",
      maxHeight: 320,
      maxWidth: 320,
    },
    text: {
      color: 'green',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold', 
    }
  })

export default HelloWorldText