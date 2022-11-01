import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import yelp from '../apis/yelp'
import {
  ArrowLeftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline'

import { StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'

const RestaurantScreen = () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  })

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  const route = useRoute()
  const { params } = route

  const fetchRestaurant = async () => {
    setResult({
      data: null,
      loading: true,
      error: null,
    })
    try {
      const response = await yelp.get(`/${params.id}`)
      setResult({
        data: response.data,
        loading: false,
        error: null,
      })
    } catch (error) {
      console.log(error)
      setResult({
        data: null,
        loading: false,
        error,
      })
    }
  }

  useEffect(() => {
    fetchRestaurant()
  }, [])

  return (
    <ScrollView className="bg-white">
      <View className="relative">
        <Image
          source={{ uri: result.data?.image_url }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-10 left-5 bg-gray-100 rounded-full p-2"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white p-4 pb-0">
        <View>
          <Text className="text-3xl font-bold">{result.data?.name}</Text>
          <View className="flex-row items-center space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500 ">
                <Text style={{ color: 'green' }}>{result.data?.rating}</Text> ·
                {result.data?.categories[0].title}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500 ">
                Nearby · {result.data?.location.display_address}
              </Text>
            </View>
          </View>
          <Text className="mt-2 pb-4 text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            soluta provident blanditiis perspiciatis eum dolore rerum qui vel
            vitae molestias!
          </Text>
        </View>
      </View>
      <TouchableOpacity className="flex-row items-center border-y  border-gray-300 p-4 bg-white">
        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={22} />
        <Text className="flex-1 text-md font-bold pl-2">
          Have a food allergy?
        </Text>
        <ChevronRightIcon color="#00CCBB" />
      </TouchableOpacity>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* Dishrows */}

        {result.data?.photos.map((item) => {
          // return (
          //   <View>
          //     <Image
          //       className="w-full h-56 bg-gray-300 p-4"
          //       source={{ uri: item }}
          //       key={item}
          //     />
          //   </View>
          // )
          return <DishRow data={item} key={item} />
        })}
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen
