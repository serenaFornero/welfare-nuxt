export const state = () => ({
  giftCards: [
    {
      id:0,
      brand: "Amazon",
      description: "Lorem Ipsum dolor sit amet",
      src: "amazon.jpg",
      idCategory: 15,
      variants: [
        {
          id: 0.1,
          value: 50,
          code: "MLF65LG"
        },
        {
          id: 0.2,
          value: 20,
          code: "MOF25LH"
        },
        {
          id: 0.3,
          value: 15,
          code: "MJF85LF"
        },
        {
          id: 0.4,
          value: 10,
          code: "APF25LS"
        },
      ]
    },
    {
      id:1,
      brand: "Netflix",
      description: "Lorem Ipsum dolor sit amet",
      src: "netflix.jpeg",
      idCategory: 15,
      variants: [
        {
          id: 1.1,
          value: 50,
          code: "GLF46LG"
        },
        {
          id: 1.2,
          value: 20,
          code: "JOF99LH"
        },
        {
          id: 1.3,
          value: 15,
          code: "RJF82LF"
        },
        {
          id: 1.4,
          value: 10,
          code: "QPF33LS"
        },
      ]
    },
    {
      id:2,
      brand: "Decathlon",
      description: "Lorem Ipsum dolor sit amet",
      src: "decathlon.png",
      idCategory: 15,
      variants: [
        {
          id: 2.1,
          value: 50,
          code: "DLF65LS"
        },
        {
          id: 2.2,
          value: 20,
          code: "LOF25XS"
        },
        {
          id: 2.3,
          value: 15,
          code: "JJF85DG"
        },
        {
          id: 2.4,
          value: 10,
          code: "RPF25JR"
        },
      ]
    },
  ]
})


export const getters = {
 getGiftCard(state){
    return state.giftCards
  }
}

