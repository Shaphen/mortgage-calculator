export const calculateMortgage = (principle, yearlyInterest, term) => {
    const monthlyInterest = yearlyInterest / 12;
    const months = term * 12;
    const midCalc = (1 + monthlyInterest)**months;

    const monthlyMortgage = principle * ((monthlyInterest * midCalc) / (midCalc - 1));
    return Math.round(monthlyMortgage * 100) / 100;
}