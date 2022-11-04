import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
  const items = useSelector(selectBasketItems)
  const navigation = useNavigation()

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Basket')
        }}
        className="mx-5 bg-[#0CB] p-4 rounded-lg flex-row items-center "
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-center text-white font-extrabold">
          View Basket
        </Text>
        <Text className="text-white font-extrabold text-lg">
          ${items.length * 100}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
