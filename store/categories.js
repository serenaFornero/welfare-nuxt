export const state = () => ({
    categoriesServices: [
        {
            id: 0,
            name: "Alimentari",
            icon: "mdi-food",
            src: "food.png",
            color: "#232649"
        },
        {
            id: 1,
            name: "Salute",
            icon: "mdi-heart-pulse",
            src: "heart-beat.png",
            color: "#232649"
        },
        {
            id: 2,
            name: "Ristorazione",
            icon: "mdi-coffee",
            src: "wine.png",
            color: "#232649"
        },
        {
            id: 3,
            name: "Corsi",
            icon: "mdi-book",
            src: "hand.png ",
            color: "#232649"

        },
        {
            id: 4,
            name: "Viaggi e vacanze",
            icon: "mdi-airplane",
            src: "plane.png",
            color: "#232649"
        },
        {
            id: 5,
            name: "Tempo libero",
            icon: "mdi-filmstrip-box",
            src: "ticket.png",
            color: "#232649"
        },
        {
            id: 6,
            name: "Fitness e benessere",
            icon: "mdi-arm-flex",
            src: "antivirus.png",
            color: "#232649"
        },
        {
            id: 7,
            name: "Shopping",
            icon: "mdi-shopping",
            src: "online-shop.png",
            color: "#232649"
        },
    ],

})

export const getters = {
    getCategory(state){
        return state.categoriesServices
    },
}

