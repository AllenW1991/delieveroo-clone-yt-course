import { View, Text, TouchableOpacity, Image } from 'react-native'

const DishRow = (props) => {
  const { data } = props

  console.log(data)
  return (
    <TouchableOpacity>
      <View>
        <Text>DishName</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          quibusdam qui aliquid nam! Aut, minus alias unde rem tempora vero?
        </Text>
        <Text>$100</Text>
        <Image source />
      </View>
    </TouchableOpacity>
  )
}

export default DishRow
