export const state = () => ({
  giftCards: [
    {
      id: 15,
      name: "GiftCard",
      icon: "mdi-wallet-giftcard",
      src: "",
      color: "#232649",
      type: [
        {
          id:0,
          brand: "Amazon",
          description: "Lorem Ipsum dolor sit amet",
          webSite: "www.amazon.it",
          src: "amazon.jpg",
          idCategory: 15,
          variants: [
            {
              src: "amazon.jpg",
              id: 0.1,
              value: 50,
              code: "MLF65LG"
            },
            {
              src: "amazon.jpg",
              id: 0.2,
              value: 20,
              code: "MOF25LH"
            },
            {
              src: "amazon.jpg",
              id: 0.3,
              value: 15,
              code: "MJF85LF"
            },
            {
              src: "amazon.jpg",
              id: 0.4,
              value: 10,
              code: "APF25LS"
            },
          ],

        },
        {
          id:1,
          brand: "Netflix",
          description: "Lorem Ipsum dolor sit amet",
          webSite: "www.netflix.it",
          src: "netflix.jpeg",
          idCategory: 15,
          variants: [
            {
              src: "netflix.jpeg",
              id: 1.1,
              value: 50,
              code: "GLF46LG"
            },
            {
              src: "netflix.jpeg",
              id: 1.2,
              value: 20,
              code: "JOF99LH"
            },
            {
              src: "netflix.jpeg",
              id: 1.3,
              value: 15,
              code: "RJF82LF"
            },
            {
              src: "netflix.jpeg",
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
          webSite: "www.decathlon.it",
          src: "decathlon.png",
          idCategory: 15,
          variants: [
            {
              src: "decathlon.png",
              id: 2.1,
              value: 50,
              code: "DLF65LS"
            },
            {
              src: "decathlon.png",
              id: 2.2,
              value: 20,
              code: "LOF25XS"
            },
            {
              src: "decathlon.png",
              id: 2.3,
              value: 15,
              code: "JJF85DG"
            },
            {
              src: "decathlon.png",
              id: 2.4,
              value: 10,
              code: "RPF25JR"
            },
          ]
        }
      ]
    }
  ],
})

export const getters = {
 getGiftCard(state){
    return state.giftCards
  }
}

