function solve(meal_cost, tip_percent, tax_percent) {
    // console.log(meal_cost, tip_percent, tax_percent)
    // Write your code here
    let tip = meal_cost * (tip_percent/100)
    let tax = meal_cost * (tax_percent/100)
    let sum = meal_cost + tip + tax
    console.log(Math.round(sum))
}

solve(10.25, 17 ,5)