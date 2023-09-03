import validator from "validator";

export const isEmpty = (chain) => {
    return chain.trim() === '';
};
