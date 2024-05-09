import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Dialog } from 'react-native-paper'
import useCounter from '../hooks/useCounter';

const Home = () => {

  const [{ count, isAlertVisible }, { handleDismissDialog, handleOnClick }] = useCounter();

  return (
    <ScrollView>
      <Text style={counter.title}>Counter</Text>
      <View style={counter.container}>
        <Text style={counter.number}>{count}</Text>
      </View>
      <View style={counter.buttonGrid}>
        <Button style={counter.button} mode='contained' onPress={() => handleOnClick('plus')}>HELLO +</Button>
        <Button style={counter.button} mode='outlined' onPress={() => handleOnClick('minus')}>Decrement -</Button>
      </View>

      <Dialog style={counter.dialog} visible={isAlertVisible} onDismiss={handleDismissDialog}>
        <Dialog.Title>Value Can't be Nagative</Dialog.Title>
        <Dialog.Actions>
          <Button mode='contained' onPress={handleDismissDialog}>Ok</Button>
        </Dialog.Actions>
      </Dialog>

      <View>
      <Button style={counter.button} mode='contained' onPress={() => handleOnClick('plus')}>Save Record</Button>
      </View>
    </ScrollView>
  )
}


const counter = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#E6E6FA'
  },
  number: {
    fontSize: 40,
    color: '#fff',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonGrid: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 10,
  },
  dialog: {
    backgroundColor: 'black'
  }
});


export default Home