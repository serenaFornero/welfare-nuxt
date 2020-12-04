export const state = () => ({
  orders: [
    {
      id: 14,
      name: "Ordini",
      icon: "mdi-gift",
      src: "",
      color: "#232649",
      orderList: [
        {
          id: 0,
          idUser: 0,
          src: "amazon.jpg",
          idCategory: 14,
          name: "Gift Card Amazon",
          description: "Lorem Ipsum dolor sit amet",
          value: 15,
          code: "K6FG4SL"
        },
        {
          id: 1,
          idUser: 0,
          src: "decathlon.png",
          idCategory: 14,
          name: "Gift Card Decathlon",
          description: "Lorem Ipsum dolor sit amet",
          value: 20,
          code: "MN85LFS"
        },
        {
          id: 2,
          idUser: 0,
          src: "netflix.jpeg",
          idCategory: 14,
          name: "Gift Card Netflix",
          description: "Lorem Ipsum dolor sit amet",
          value: 50,
          code: "56DLSKR"
        },
      ]
    }
  ],
})

export const getters = {
  getOrder(state){
    return state.orders
  }
}
