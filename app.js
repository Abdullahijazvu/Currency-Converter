import inquirer from "inquirer";
const UsdtoPkr = 228.43;
const PkrtoUsd = 0.0043;
const EutoPkr = 239.85;
const PkrtoEu = 0.0042;
const EutoUsd = 1.05;
const UsdtoEu = 0.95;
let repeat = false;
async function Converter() {
    do {
        let answer = await inquirer.prompt([
            {
                name: "CurrencyForm",
                type: "list",
                choices: ['USD', 'PKR', 'EU'],
                message: "Select from which currency you want to convert"
            },
            {
                name: "CurrencyTo",
                type: "list",
                choices: ['USD', 'PKR', 'EU'],
                message: "Select to which currency you want to convert"
            },
            {
                name: "Amount",
                type: "number",
                message: "Enter values: "
            }
        ]);
        //console.log(answer.Amount);
        switch (answer.CurrencyForm) {
            case 'USD':
                if (answer.CurrencyTo === "PKR") {
                    let amt = answer.Amount * UsdtoPkr;
                    console.log(amt);
                }
                else if (answer.CurrencyTo === "EU") {
                    let amt = answer.Amount * UsdtoEu;
                    console.log(amt);
                }
                else {
                    console.log(answer.Amount);
                }
                break;
            case 'PKR':
                if (answer.CurrencyTo === "USD") {
                    let amt = answer.Amount * PkrtoUsd;
                    console.log(amt);
                }
                else if (answer.CurrencyTo === "EU") {
                    let amt = answer.Amount * PkrtoEu;
                    console.log(amt);
                }
                else {
                    console.log(answer.Amount);
                }
                break;
            case 'EU':
                if (answer.CurrencyTo === "PKR") {
                    let amt = answer.Amount * EutoPkr;
                    console.log(amt);
                }
                else if (answer.CurrencyTo === "USD") {
                    let amt = answer.Amount * EutoUsd;
                    console.log(amt);
                }
                else {
                    console.log(answer.Amount);
                }
                break;
        }
        repeat = await playAgain();
    } while (repeat == true);
}
async function playAgain() {
    let again = await inquirer.prompt([{
            type: "list",
            name: "restart",
            choices: ['Yes', 'No'],
            message: "Do you want to restart the program: "
        }]);
    return again.restart === 'Yes' ? true : false;
}
;
Converter();
