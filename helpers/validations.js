import validator from "validator";

export const isEmpty = (chain) => {
  return chain.trim() === "";
};

export const isPositiveInteger = (number) => {
  return typeof number === "number" && number >= 0 && Number.isInteger(number);
};
