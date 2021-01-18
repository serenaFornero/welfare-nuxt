export const state = () => ({
  categoriesGiftCard: [
    {
      id:8,
      brand: "Amazon",
      description: "Lorem Ipsum dolor sit amet",
      webSite: "www.amazon.it",
      src:'/amazon.jpg',
      color: "#232649",
      icon: 'mdi-gift'
    },
    {
      id:9,
      brand: "Netflix",
      description: "Lorem Ipsum dolor sit amet",
      webSite: "www.netflix.it",
      src: '/netflix.jpeg',
      color: "#232649",
      icon: 'mdi-gift'
    },
    {
      id:10,
      brand: "Decathlon",
      description: "Lorem Ipsum dolor sit amet",
      webSite: "www.decathlon.it",
      src: '/decathlon.png',
      color: "#232649",
      icon: 'mdi-gift'
    }
  ],

  giftCards: [
    {
      id: 8.1,
      name: 'Amazon 50',
      value: 50,
      code: "MLF65LG",
      categoryId: 8
    },
    {

      id: 8.2,
      name: 'Amazon 20',
      value: 20,
      code: "MOF25LH",
      categoryId: 8
    },
    {

      id: 8.3,
      name: 'Amazon 15',
      value: 15,
      code: "MJF85LF",
      categoryId: 8
    },
    {

      id: 8.4,
      name: 'Amazon 10',
      value: 10,
      code: "APF25LS",
      categoryId: 8
    },
    {

      id: 9.1,
      name: 'Netflix 50',
      value: 50,
      code: "GLF46LG",
      categoryId: 9
    },
    {

      id: 9.2,
      name: 'Netflix 20',
      value: 20,
      code: "JOF99LH",
      categoryId: 9
    },
    {

      id: 9.3,
      name: 'Netflix 15',
      value: 15,
      code: "RJF82LF",
      categoryId: 9
    },
    {

      id: 9.4,
      name: 'Netflix 10',
      value: 10,
      code: "QPF33LS",
      categoryId: 9
    },
    {

      id: 10.1,
      name: 'Decathlon 50',
      value: 50,
      code: "DLF65LS",
      categoryId: 10
    },
    {

      id: 10.2,
      name: 'Decathlon 20',
      value: 20,
      code: "LOF25XS",
      categoryId: 10
    },
    {

      id: 10.3,
      name: 'Decathlon 15',
      value: 15,
      code: "JJF85DG",
      categoryId: 10
    },
    {

      id: 10.4,
      name: 'Decathlon 10',
      value: 10,
      code: "RPF25JR",
      categoryId: 10
    },
  ],
})

export const getters = {
  getCategory(state){
   return state.categoriesGiftCard
  },
  getCategoryById: (state) => (categoryId) => {
    return state.categoriesGiftCard.filter(el => el.id === categoryId)
  },
  getCardsById: (state) => (id) => {
    return state.giftCards.filter(el => el.categoryId === id);
  },

}

export const mutations = {

}

