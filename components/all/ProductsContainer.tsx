import React from 'react'
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
export default function ProductsContainer({ data }: any) {
  const [layout, setLayout] = useState<string>('grid')
  const totalProducts = data?.meta.pagination.total || {}
  console.log('ProductsContainer.tsx', data)

  const renderItem = ({ item }: any) => (
    // layout === 'grid' ? (
    //   <ProductsGrid item={item} />
    // ) : (
    <ProductsList item={item} />
  )
  //)

  if (!totalProducts || totalProducts == 0) {
    return (
      <View>
        <Text>NO</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {totalProducts} product{totalProducts > 1 && 's'}
        </Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => setLayout('grid')}
            style={[styles.button, layout === 'grid' && styles.activeButton]}
          >
            <FontAwesome name='th' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLayout('list')}
            style={[styles.button, layout === 'list' && styles.activeButton]}
          >
            <FontAwesome name='list' size={24} color='white' />
          </TouchableOpacity>
        </View>
      </View>

      {/* PRODUCTS */}
      <View style={styles.productList}>
        {totalProducts === 0 ? (
          <Text style={styles.noProductsText}>
            Sorry, no products matched your search...
          </Text>
        ) : layout === 'grid' ? (
          <ProductsGrid items={data} />
        ) : (
          <ProductsList />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: '#f4511e',
    borderRadius: 4,
    color: 'white',
  },
  activeButton: {
    backgroundColor: '#ff6e40',
  },
  productList: {
    flex: 1,
    marginTop: 8,
  },
  noProductsText: {
    fontSize: 18,
    marginTop: 16,
    textAlign: 'center',
  },
})
