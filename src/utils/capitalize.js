// src/utils/capitalize.js
export const capitalizeFirstLetter = (string) => {
    return string.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };
  