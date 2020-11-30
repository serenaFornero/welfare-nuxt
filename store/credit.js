export const state = () => ({
  credit: [
    {
      userId: 0,
      creditAvailable: 120,
      tot: 860,
      giftCardCredit: 258.23,
      expiration: "30/12/2020"
    }
  ]
})

export const getters = {
  getCredit(state){
    return state.credit
    }
  }
