export const state = () => ({
  orders: [
    {
      id: 14,
      name: "Ordini",
      icon: "mdi-gift",
      src: "",
      color: "#232649",
    }
  ],
  orderList: [
    {
      id: 1,
      idUser: 0,
      src: "/amazon.jpg",
      categoryId: 8,
      brand: "Amazon",
      description: "Lorem Ipsum dolor sit amet",
      value: 15,
      code: "K6FG4SL",
    },
    {
      id: 2,
      idUser: 0,
      src: "/decathlon.png",
      categoryId: 10,
      brand: "Decathlon",
      description: "Lorem Ipsum dolor sit amet",
      value: 20,
      code: "MN85LFS",
    },
    {
      id: 3,
      idUser: 0,
      src: "/netflix.jpeg",
      categoryId: 9,
      brand: "Netflix",
      description: "Lorem Ipsum dolor sit amet",
      value: 50,
      code: "56DLSKR",
    },
  ]
})

export const getters = {
  getOrder(state) {
    return state.orders
  },
  getOrderList(state) {
    return state.orderList
  },
  getOrdersById: (state) => (id) => {
    return state.orderList.filter(el => el.id === id);
  },
}

export const mutations = {
  addOrder(state, card){
    state.orderList.push({...card})
    console.log("mutations: Ordine aggiunto");
  },
  removeOrder(state, index) {
    state.orderList.splice(index, 1)
    console.log("mutations: Ordine eliminato");
  },
}
