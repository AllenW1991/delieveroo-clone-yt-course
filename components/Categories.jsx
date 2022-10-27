import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
    </ScrollView>
  )
}

export default categories
