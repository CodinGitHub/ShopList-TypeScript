type Currency = 'MXN' | 'USD';

interface Price{
    number: number,
    currency: Currency
}

interface ExpenseItem{
    id: number,
    title: string,
    cost: Price
}

class Expenses{

}