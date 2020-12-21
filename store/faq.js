export const state = () => ({
  faq: [
    {
      id: 0,
      name:  "Login",
      src: "log-in.png",
    },
    {
      id: 1,
      name: "profile.png",
      src: "profile.png",
    },
    {
      id: 2,
      name: "wallet.png",
      src: "wallet.png",

    },
    {
      id: 3,
      name: "shop.png",
      src: "shop.png",

    },
    {
      id: 4,
      name: "credit-card.png",
      src: "credit-card.png",
    },
    {
      id: 5,
      name: "location-pin.png",
      src: "location-pin.png",

    },
  ],

})

export const getters = {
  getCategory(state){
    return state.faq
  },
}

