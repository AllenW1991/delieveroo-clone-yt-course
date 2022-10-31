import { useState } from 'react'
import yelp from '../apis/yelp'

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  })

  const searchRestaurants = async (term) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    })

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 15,
          term: term,
          location: 'NewYorl',
        },
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}
