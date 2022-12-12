# Mortgage Calculator

### How to Start This App Locally:
* Navigate to root of project
* Type in `npm start` and press enter

### MVP
* Allow user to enter in potential properties and calculate the projected mortgage based on variables set by user
  * [Mortgage Calculator Example](https://www.mortgagecalculator.org/)
  * M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1] (Ref: [How Do I Figure Out My Mortgage Calculation?](https://www.mymove.com/mortgage/mortgage-calculation/))
    * M = Monthly Payment
    * P = Principle
    * i = Interest Rate per month (Ex if yearly interest is 5% then **i** would be .05/12 = .00417)
    * n = Loan Term (Ex: 30 year fixed)
* Add support for amortization schedule estimator to be shown when enabled by user
  * [How to Calculate Amortization](https://www.fool.com/the-ascent/personal-finance/how-is-loan-amortization-schedule-
