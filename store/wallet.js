export const state = () => ({
  transfer: [
    {
      id: 8,
      name: "Qr-Code",
      icon: "mdi-cash-plus",
      src: "no-border.png",
      color: "#232649"
    },
    {
      id: 9,
      name: "Trasferimenti",
      icon: "mdi-cash-plus",
      src: "up-arrow.png",
      color: "#232649"
    },
  ],

  refund: [
    {
      id: 10,
      name: "Richiedi Rimborso",
      icon: "mdi-cash-plus",
      src: "edit.png",
      color: "#232649"
    },
    {
      id: 11,
      name: "Rimborsi",
      icon: "mdi-cash-refund",
      src: "deposit.png",
      color: "#232649"
    },
  ],

  deposit: [
    {
      id: 12,
      name: "Effettua Versamento",
      icon: "mdi-cash-plus",
      src: "edit.png",
      color: "#232649"
    },
    {
      id: 13,
      name: "Versamenti",
      icon: "mdi-cash-plus",
      src: "share.png",
      color: "#232649"
    },
  ],
  receipts: [
    {
      id: 14,
      name: "Ricevute",
      icon: "mdi-cash-plus",
      src: "billing.png",
      color: "#232649"
    }
  ],
})

export const getters = {
  getRefund(state){
    return state.refund
  },
  getIconRefund(state){
    return state.refund.map(el => el.icon)
  },
  getIconDeposit(state){
    return state.deposit.map(el => el.icon)
  },


}
