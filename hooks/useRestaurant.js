import { useState } from 'react'
import yelp from '../apis/yelp'

export default () => {
  const [restaurant, setRestaurant] = useState({
    data: null,
    loading: false,
    error: null,
  })
  const getRestaurants = async (term) => {
    setRestaurant({
      data: null,
      loading: true,
      error: null,
    })
    try {
      const response = await yelp.get('/search', {
        params: { limit: 10, term: term, location: 'newyork' },
      })
      setRestaurant({
        data: response.data.businesses,
        loading: false,
        error: null,
      })
    } catch (error) {
      setRestaurant({
        data: response.data,
        loading: true,
        error: ('something went wrong', error),
      })
    }
  }
  return [restaurant, getRestaurants]
}
