// action.js
export const INC = (id) => {
    return {
        type: "INC_QUANTITY",
        payload: id
    }
}

export const DEC = (id) => {
    return {
        type: "DEC_QUANTITY",
        payload: id
    }
}
