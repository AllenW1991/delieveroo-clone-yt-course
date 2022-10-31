import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import yelp from '../apis/yelp'

const FeaturedRow = (props) => {
  const { title, description } = props
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    getRestaurants()
  }, [])

  const getRestaurants = async () => {
    const response = await yelp.get('/search', {
      params: { limit: 15, term: 'Hamburger', location: 'newyork' },
    })
    console.log(response)
    // try {

    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 ">{description}</Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.8}
          genre="Japanese"
          address="123 Main St."
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.8}
          genre="Japanese"
          address="123 Main St."
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
