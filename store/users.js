export const state = () => ({
 users: [
   {
     id: 0,
     name: "Mario ",
     surname: "Rossi",
     avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light" ,
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
