export const weightConverter = (grams: number) => {
    if (grams < 1000) return `${grams.toFixed(0)}g`;
    if (grams < 1000 * 1000) return `${(grams / 1000).toFixed(1)}kg`;
    return `${(grams / 100000).toFixed(4)} tons`;
};