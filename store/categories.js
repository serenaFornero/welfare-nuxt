export const state = () => ({
  categoriesServices: [
    {
      id: 0,
      name: "Alimentari",
      icon: "mdi-food",
      src: "food.png",
      color: "#232649"
    },
    {
      id: 1,
      name: "Salute",
      icon: "mdi-heart-pulse",
      src: "heart-beat.png",
      color: "#232649"
    },
    {
      id: 2,
      name: "Ristorazione",
      icon: "mdi-coffee",
      src: "wine.png",
      color: "#232649"
    },
    {
      id: 3,
      name: "Corsi",
      icon: "mdi-book",
      src: "hand.png ",
      color: "#232649"

    },
    {
      id: 4,
      name: "Viaggi e vacanze",
      icon: "mdi-airplane",
      src: "plane.png",
      color: "#232649"
    },
    {
      id: 5,
      name: "Cultura e intrattenimento",
      icon: "mdi-filmstrip-box",
      src: "ticket.png",
      color: "#232649"
    },
    {
      id: 6,
      name: "Fitness e benessere",
      icon: "mdi-arm-flex",
      src: "antivirus.png",
      color: "#232649"
    },
    {
      id: 7,
      name: "Shopping",
      icon: "mdi-shopping",
      src: "online-shop.png",
      color: "#232649"
    },
  ],

  categoriesWallet: [
    {
      id: 8,
      name: "Qr-Code",
      icon: "mdi-cash-plus",
      src: "no-border.png",
      color: "#232649"
    },
    {
      id: 9,
      name: "Trasferimenti",
      icon: "mdi-cash-plus",
      src: "up-arrow.png",
      color: "#232649"
    },
    {
      id: 10,
      name: "Richiedi Rimborso",
      icon: "mdi-cash-plus",
      src: "edit.png",
      color: "#232649"
    },
    {
      id: 11,
      name: "Rimborsi",
      icon: "mdi-cash-refund",
      src: "deposit.png",
      color: "#232649"
    },
    {
      id: 12,
      name: "Effettua Versamento",
      icon: "mdi-cash-plus",
      src: "edit.png",
      color: "#232649"
    },
    {
      id: 13,
      name: "Versamenti",
      icon: "mdi-cash-plus",
      src: "share.png",
      color: "#232649"
    },
  ],

  categoriesOrders: [
    {
      id: 14,
      name: "Ordini",
      icon: "mdi-gift",
      src: "",
      color: "#232649"
    }
  ],

  categoriesGiftCards: [
    {
      id: 15,
      name: "GiftCard",
      icon: "mdi-wallet-giftcard",
      src: "",
      color: "#232649"
    },
  ]

})

export const getters = {
  getCategory(state){
    return state.categoriesServices
  },
  getCategoryWallet(state){
    return state.categoriesWallet
  },

}

