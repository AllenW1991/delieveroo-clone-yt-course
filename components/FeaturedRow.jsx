import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import useRestaurant from '../hooks/useRestaurant'

const FeaturedRow = (props) => {
  const { title, description, term } = props
  const [{ data, loading, error }, getRestaurants] = useRestaurant({})
  useEffect(() => {
    getRestaurants(term)
  }, [term])

  if (loading) {
    return <ActivityIndicator size="large" className=" my-10 mt-20" />
  }
  if (error) {
    return (
      <View>
        <Text>Something went wrong:</Text>
      </View>
    )
  } else {
    return (
      <View>
        <View className="mt-4 flex-row items-center justify-between">
          <Text className="font-bold text-lg">{title}</Text>
          <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-xs text-gray-500 ">{description}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pt-4"
        >
          {/* RestaurantCards */}
          {data?.map((item) => {
            return <RestaurantCard id={item.id} data={item} key={item.id} />
          })}
        </ScrollView>
      </View>
    )
  }
}

export default FeaturedRow
