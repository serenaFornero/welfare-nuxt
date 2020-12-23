export const state = () => ({
  categoriesFaq: [
    {
      id: 0,
      name:  "Login",
      src: "log-in.png",
    },
    {
      id: 1,
      name: "Profilo",
      src: "profile.png",
    },
    {
      id: 2,
      name: "Portafoglio",
      src: "wallet.png",

    },
    {
      id: 3,
      name: "Negozio",
      src: "shop.png",

    },
    {
      id: 4,
      name: "Trasferimenti",
      src: "credit-card.png",
    },
    {
      id: 5,
      name: "Mappa",
      src: "location-pin.png",

    },
  ],
  faq: [
    {
      id: 0.1,
      categoryId: 0,
      name: "Come posso accedere all'app?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 0.2,
      categoryId: 0,
      name: "Devo inserire ogni volta le credenziali per accedere all'app?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1.1,
      categoryId: 1,
      name: "Come posso aggiungere un familiare alla lista dei miei familiari?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1.2,
      categoryId: 1,
      name: "Dove posso modificare i miei dati di accesso all'app?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2.1,
      categoryId: 2,
      name: "Come posso richiedere un rimborso?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2.2,
      categoryId: 2,
      name: "Come richiedo un rimborso per un familiare non presente nella lista dei miei familiari?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2.3,
      categoryId: 2,
      name: "I rimborsi possono essere spesi come credito welfare?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3.1,
      categoryId: 3,
      name: "Dove posso pagare con WeCare?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3.2,
      categoryId: 3,
      name: "Dove trovo la ricevuto del pagamento?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4.1,
      categoryId: 4,
      name: "C'è un limite minimo di spesa del credito welfare?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4.2,
      categoryId: 4,
      name: "C'è un limite massimo di spesa per i buoni acquisto?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5.1,
      categoryId: 5,
      name: "Come posso visualizzare i servizi in base alla localizzazione?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5.2,
      categoryId: 5,
      name: "Come visualizzare i servizi che non sono vicino a me?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

  ]

})

export const getters = {
  getCategory(state){
    return state.categoriesFaq
  },
  getFaqById: (state) => (id) => {
    return state.faq.filter(el => el.categoryId === id);
  },

}

