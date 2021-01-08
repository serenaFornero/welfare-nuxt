export const state = () => ({
  relatives: [
    {
      userId: 0,
      idRelative: 0.1,
      name: "Carlo",
      surname: "Rossi",
      birthDate: "10/02/2010",
      relation: "Figlio"
    },
    {
      userId: 0,
      idRelative: 0.2,
      name: "Valeria",
      surname: "Bianchi",
      birthDate: "1/07/1980",
      relation: "Coniuge"
    }
  ],
})

export const getters = {
  getRelative(state) {
    return state.relatives
  },
  getRelNames(state){
    return state.relatives.map(el => el.name)
  },
  getRelSurnames(state){
    return state.relatives.map(el => el.surname)
  },

}

export const mutations = {
  addRelative(state, relative) {
    state.relatives.push({
      name: relative.name,
      surname: relative.surname,
      birthDate: relative.birthDate,
      relation: relative.relation,
    });
    console.log("mutations: relative aggiunto");
  },
 /* removeRel(state, relative){
    state.relatives.splice({
      name: relative.name,
      surname: relative.surname,
      birthDate: relative.birthDate,
      relation: relative.relation,
    })
    console.log("mutations: relative eliminato");
  }*/
  removeRel(state, index) {
    state.relatives.splice(index, 1)
    console.log("mutations: relative eliminato");
  },


}
