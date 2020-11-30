export const state = () => ({
 users: [
   {
     id: 0,
     name: "Mario ",
     surname: "Rossi",
     email: "mario.rossi@nomeazienda.it",
     password: "mario12",
     birthDate: "12/12/1980",
   }
 ],
})

export const getters = {
  getUser(state){
    return state.users
  }
}
