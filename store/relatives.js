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

    relation: ["Coniuge", "Figlio", "Fratello", "Sorella", "Suocero"]
})

export const getters = {
    getRelative(state) {
        return state.relatives
    },
    getRelationship(state) {
        return state.relation
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
    removeRel(state, index) {
        state.relatives.splice(index, 1)
        console.log("mutations: relative eliminato");
    },


}
