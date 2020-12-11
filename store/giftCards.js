export const state = () => ({
  categoriesGiftCard: [
    {
      id:0,
      brand: "Amazon",
      description: "Lorem Ipsum dolor sit amet",
      webSite: "www.amazon.it",
      src:'/amazon.jpg',
    },
    {
      id:1,
      brand: "Netflix",
      description: "Lorem Ipsum dolor sit amet",
      webSite: "www.netflix.it",
      src: '/netflix.jpeg',
    },
    {
      id:2,
      brand: "Decathlon",
      description: "Lorem Ipsum dolor sit amet",
      webSite: "www.decathlon.it",
      src: '/decathlon.png',
    }
  ],

  giftCards: [
    {
      id: 0.1,
      name: 'Amazon 50',
      value: 50,
      code: "MLF65LG",
      categoryId: 0
    },
    {

      id: 0.2,
      name: 'Amazon 20',
      value: 20,
      code: "MOF25LH",
      categoryId: 0
    },
    {

      id: 0.3,
      name: 'Amazon 15',
      value: 15,
      code: "MJF85LF",
      categoryId: 0
    },
    {

      id: 0.4,
      name: 'Amazon 10',
      value: 10,
      code: "APF25LS",
      categoryId: 0
    },
    {

      id: 1.1,
      name: 'Netflix 50',
      value: 50,
      code: "GLF46LG",
      categoryId: 1
    },
    {

      id: 1.2,
      name: 'Netflix 20',
      value: 20,
      code: "JOF99LH",
      categoryId: 1
    },
    {

      id: 1.3,
      name: 'Netflix 15',
      value: 15,
      code: "RJF82LF",
      categoryId: 1
    },
    {

      id: 1.4,
      name: 'Netflix 10',
      value: 10,
      code: "QPF33LS",
      categoryId: 1
    },
    {

      id: 2.1,
      name: 'Decathlon 50',
      value: 50,
      code: "DLF65LS",
      categoryId: 2
    },
    {

      id: 2.2,
      name: 'Decathlon 20',
      value: 20,
      code: "LOF25XS",
      categoryId: 2
    },
    {

      id: 2.3,
      name: 'Decathlon 15',
      value: 15,
      code: "JJF85DG",
      categoryId: 2
    },
    {

      id: 2.4,
      name: 'Decathlon 10',
      value: 10,
      code: "RPF25JR",
      categoryId: 2
    },
  ],
})

export const getters = {
 getGiftCard(state){
    return state.giftCard
  },
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

