export const state = () => ({
      relatives: [
        {
          userId: 0,
          idRelative: 0.1,
          name: "Carlo",
          surname: "Rossi",
          birthDate: "10/02/2010",
          relationship: "Figlio"
        },
        {
          userId: 0,
          idRelative: 0.2,
          name: "Valeria",
          surname: "Bianchi",
          birthDate: "1/07/1980",
          relationship: "Moglie"
        }
      ],
})

export const getters = {
  getRelative(state){
    return state.relatives
  }
}
