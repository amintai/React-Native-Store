import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import {  Button, Card, Text } from 'react-native-paper'
import useProductList from '../hooks/useProduct'

const Product = () => {
  const [{ productList,isLoading }] = useProductList();

  if(isLoading) {
    return(
      <Text style={ProductStyle.productLoader}>Loading.....</Text>
    )
  }
  return (
    <View style={ProductStyle.container}>
      <Text style={ProductStyle.title}> Product List</Text>
      <ScrollView>
        {productList?.map((item: any) => {
          return item.images.map((obj: any) => {
            return (
              <Card style={ProductStyle.productCard}>
                <Card.Cover src={obj} />
                <Card.Title title={`Price: ${item.price} ${item.title}`} />
                <Card.Actions>
                  <Button>Add To Cart</Button>
                  <Button>Add To Wishlist</Button>
                </Card.Actions>
              </Card>
            )
          })
        })}
      </ScrollView>
    </View>
  )
};

const ProductStyle = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#E6E6FA'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productCard: {
    width: 300,
    margin: 10,
  },
  productLoader: {
    flex:1,
    textAlignVertical: 'center',
    display:'flex',
    textAlign:'center'
  }
});

export default Product