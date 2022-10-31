import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer Tgpj3deMN2algRLcWzoGiBXQPq_2UOYFgxim-6p2ewyvbRcQsSc6GJrbp37JAl0LvGuOpcC3AsEkSli429Q6z5GniZrtcuqZsLVRlQyQUGBc2dJ3oeCqgAUf9AQ4Y3Yx`,
  },
})
