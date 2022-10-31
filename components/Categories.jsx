import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard'
import useRestaurant from '../hooks/useRestaurant'

const categories = () => {
  const [{ data, loading, error }, getRestaurant] = useRestaurant()

  useEffect(() => {
    getRestaurant('Restaurants')
  }, [])

  if (loading) {
    return <ActivityIndicator size={40} className="my-5" />
  }
  if (error) {
    return (
      <View>
        <Text>Something went wrong:{error}</Text>
      </View>
    )
  } else {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* CategoryCard */}
        {data?.map((item) => {
          return (
            <CategoryCard
              imgUrl="https://links.papareact.com/gn7"
              data={item}
              id={item.id}
              key={item.id}
            />
          )
        })}
      </ScrollView>
    )
  }
}

export default categories
