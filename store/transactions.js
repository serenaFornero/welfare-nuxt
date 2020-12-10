export const state = () => ({
  transactions: [
    {
      id: 0,
      name: "Market Pinerolo" ,
      value: -20,
      idCategory: 0,
      date: "14-12-2020",
      userId: 0
    },
    {
      id: 2,
      name: "Bar Pinerolo" ,
      value: -30,
      idCategory: 2,
      date: "1-10-2020",
      userId: 0
    },
    {
      id: 3,
      name: "Trasporti" ,
      value: 100,
      idCategory: 11,
      date: "10-10-2020",
      userId: 0
    },
    {
      id: 4,
      name: "Pasticceria Pinerolo" ,
      value: -10,
      idCategory: 0,
      date: "4-11-2020",
      userId: 0
    },
    {
      id: 5,
      name: "Retta Scolastica" ,
      value: 300,
      idCategory: 11,
      date: "6-10-2020",
      userId: 0
    }
  ]
})

export const getters = {
  getTransactions(state){
    return state.transactions
  }
}


