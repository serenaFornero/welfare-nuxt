export const state = () => ({
  orders: [
    {
      id: 0,
      idUser: 0,
      idCategory: 14,
      name: "Gift Card Amazon",
      description: "Lorem Ipsum dolor sit amet",
      value: 15 ,
      code: "K6FG4SL"
    },
    {
      id: 1,
      idUser: 0,
      idCategory: 14,
      name: "Gift Card Decathlon",
      description: "Lorem Ipsum dolor sit amet",
      value: 20,
      code: "MN85LFS"
    },
    {
      id: 2,
      idUser: 0,
      idCategory: 14,
      name: "Gift Card Netflix",
      description: "Lorem Ipsum dolor sit amet",
      value: 50,
      code: "56DLSKR"
    },
  ]
})

export const getters = {
  getOrder(state){
    return state.orders
  }
}
