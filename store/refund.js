import categorie from "@/components/Categorie";

export const state = () => ({
  refundRequest: [
    {
      id: 0,
      description: "Spese per i servizi di educazione e istruzione" ,
      name: "Rette scolastiche",
      credit: 500,
      date: "12-12-2020"
    },
  ],

  refundCategory: [
    {
      id: 0,
      category: "Spese per servizi di educazione e istruzione",
    },
    {
      id: 1,
      category: "Spese per servizi di assistenza ai familiari",
    },
    {
      id: 2,
      category: "Abbonamenti a trasporto pubblico",
    },
  ],
  type: [
    {
      id: 0.1,
      value: 1
    },
    {
      id: 0.2,
      value: 2
    },
    {
      id: 0.3,
      value: 3
    },
    {
      id: 1.1,
      value: 4
    },
    {
      id: 1.2,
      value: 5
    },
    {
      id: 1.3,
      value: 6
    },
    {
      id: 2.1,
      value: 7
    },
    {
      id: 2.2,
      value: 8
    },
    {
      id: 2.3,
      value: 9
    }
  ]
})

export const getters = {
  getCategory (state) {
    return state.refundCategory.map(el => el.category)
  },
  getType(state){
    return state.type.map(el => el.value)
  },
  getRequest(state){
    return state.refundRequest
  }
}



