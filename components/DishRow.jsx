import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectBasketItems } from '../features/basketSlice'

const DishRow = (props) => {
  const { data } = props
  const [isPressed, setIsPressed] = useState(false)
  const items = useSelector(selectBasketItems)

  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket(data))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed)
        }}
        className={`bg-white p-4 border border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg mb-1">DishName</Text>
            <Text className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              quibusdam qui aliquid nam! Aut, minus alias unde rem tempora vero?
            </Text>
            <Text className="py-2 text-gray-400">$100</Text>
          </View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: '#F3F3F4',
            }}
            source={{ uri: data }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 py-2">
            <TouchableOpacity>
              <MinusCircleIcon size={40} color="#0cb" />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#0cb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
