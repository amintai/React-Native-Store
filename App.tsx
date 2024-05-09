import { StyleSheet } from "react-native"
import Home from "./src/screens/Home";
import React from "react";
import Product from "./src/screens/Product";


const App = () => {
  return (
    <>
      {/* <Home /> */}
      <Product />
    </>
  )
};

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#333',
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
});

const lists = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  listItem: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});


export default App;