import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = (props) => {
  const { data } = props
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate('Restaurant', data)
      }}
    >
      <Image
        source={{ uri: data.image_url }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="pb-4">
        <Text className="font-bold text-lg pt-2 px-1">{data.name}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{data.rating}</Text> ·
            {data.categories[0].title}
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-gray-500 text-xs">
            {data.location.display_address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
