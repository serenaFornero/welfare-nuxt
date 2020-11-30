export const state = () => ({
  categories: [
    {
      id: 0,
      name: "Alimentari",
      icon: "mdi-food",
    },
    {
      id: 1,
      name: "Salute",
      icon: "mdi-heart-pulse",
    },
    {
      id: 2,
      name: "Ristorazione",
      icon: "mdi-coffee",
    },
    {
      id: 3,
      name: "Corsi",
      icon: "mdi-book",

    },
    {
      id: 4,
      name: "Viaggi e vacanze",
      icon: "mdi-airplane",
    },
    {
      id: 5,
      name: "Cultura e intrattenimento",
      icon: "mdi-filmstrip-box",
    },
    {
      id: 6,
      name: "Fitness e benessere",
      icon: "mdi-arm-flex",
    },
    {
      id: 7,
      name: "Shopping",
      icon: "mdi-shopping",
    },
    {
      id: 8,
      name: "Rimborsi",
      icon: "mdi-cash-refund",
    },
    {
      id: 9,
      name: "Versamenti",
      icon: "mdi-cash-plus",
    },
    {
      id: 10,
      name: "GiftCard",
      icon: "mdi-wallet-giftcard",
    },
    {
      id: 11,
      name: "Ordini",
      icon: "mdi-gift",
    }

  ],

})

export const getters = {
  getCategory(state){
    return state.categories
  }
}

