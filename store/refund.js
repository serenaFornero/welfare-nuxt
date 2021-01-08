export const state = () => ({
  refundRequest: [
    {
      id: 0,
      type: "Rette scolastiche " ,
      category: "Spese per i servizi di educazione e istruzione",
      value: 500,
      beneficiary: "Carlo Rossi"
    },
  ],

  refund:[
    {
      id: 0,
      type: "Abbonamento mensile trasporti" ,
      category: "Abbonamenti a trasporto pubblico",
      value: 100,
      beneficiary: "Mario Rossi"
    },
    {
      id: 1,
      type: "Rette scolastiche" ,
      category: "Spese per i servizi di educazione e istruzione",
      value: 500,
      beneficiary: "Carlo Rossi"
    },
  ],

  refundCategory: [
    {
      id: 0,
      category: "Spese per servizi di educazione e istruzione",
      type: "rette scolastiche",
    },
    {
      id: 1,
      category: "Spese per servizi di assistenza ai familiari",
      type: "Spese mediche",
    },
    {
      id: 2,
      category: "Abbonamenti a trasporto pubblico",
      type: "Abbonamento mensile trasporti",
    },
  ],
  type:[
    {
      id: 0.1,
      name: "rette scolastiche",
    },
    {
      id: 0.2,
      name: "Corsi",
    },
    {
      id: 0.3,
      name: "Libri scolastici",
    },
    {
      id: 1.1,
      name: "Spese mediche",
    },
    {
      id: 1.2,
      name: "Spese badante",
    },
    {
      id: 2.1,
      name: "Abbonamento mensile trasporti",
    },
  ]
})

export const getters = {
  getType(state){
    return state.type.map(el => el.name)
  },
  getRefundCategory(state){
    return state.refundCategory
  },
  getRequest(state){
    return state.refundRequest
  },
  getRefund(state){
    return state.refund
  }
}



