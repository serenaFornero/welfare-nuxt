export const state = () => ({
  refundCategory: [
    {
      id: 0,
      category: "Spese per servizi di educazione e istruzione",
      type: [
        {
          id: 0.1,
        },
        {
          id: 0.2,
        },
        {
          id: 0.3,
        }
      ]
    },
    {
      id: 1,
      category: "Spese per servizi di assistenza ai familiari",
      type: [
        {
          id: 1.1,
        },
        {
          id: 1.2,
        },
        {
          id: 1.3,
        }
      ]
    },
    {
      id: 2,
      category: "Abbonamenti a trasporto pubblico",
      type: [
        {
          id: 2.1,
        },
        {
          id: 2.2,
        },
        {
          id: 2.3,
        }
      ]
    },
  ],
})

export const getters = {
  getRefund(state) {
    return state.refund
  },

}
