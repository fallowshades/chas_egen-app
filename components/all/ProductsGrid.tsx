// SignsGrid.js
import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProductGrid = ({ items }: any) => {
  const navigation = useNavigation()
  console.log(items)

  const renderProduct = ({ item }: any) => {
    const { id, attributes } = item
    const { title, price, image } = attributes
    console.log(item)
    return (
      <View key={id} style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignDetails', { id })}
          style={styles.cardTouchable}
        >
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </TouchableOpacity>
        {/** 
        <TouchableOpacity
          onPress={() => navigation.navigate('EditSign', { id })}
          style={styles.editButton}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity> */}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {items ? (
        <FlatList
          data={items}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Adjust number of columns as needed
        />
      ) : (
        <Text>No products available</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  card: {
    flex: 1,
    margin: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTouchable: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 16,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
  editButton: {
    padding: 16,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default ProductGrid
