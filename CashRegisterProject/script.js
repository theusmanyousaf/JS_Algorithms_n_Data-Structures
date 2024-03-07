let price = 3.26;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

const updateUI = change => {
    const currencyNameMap = {
        PENNY: 'Pennies',
        NICKEL: 'Nickels',
        DIME: 'Dimes',
        QUARTER: 'Quarters',
        ONE: 'Ones',
        FIVE: 'Fives',
        TEN: 'Tens',
        TWENTY: 'Twenties',
        'ONE HUNDRED': 'Hundreds'
    };
    // Update cid if change is passed in
    if (change) {
        change.forEach(changeArr => {
            const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
            targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
        });
    }

    cash.value = '';
    priceScreen.textContent = `Total: $${price}`;
    cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
            .map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`)
            .join('')}  
  `;
};

updateUI();
