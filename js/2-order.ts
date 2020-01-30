const defaultOrder = {
  articles: [
    {
      price: 1200.50,
      vat: 0.2,
      title: 'Macboox Air Refurbished - 2013'
    },
    {
      price: 9,
      vat: 0,
      title: 'I feel smashing subscription'
    }
  ],
  customer: {
    name: 'Fritz Furball',
    address: 'Smashing Hill, 90210',
    dateOfBirth: new Date(2006, 9, 1)
  }
}

type Article = {
  price: number,
  vat: number,
  title: string
}

type Customer = {
  name: string,
  address: string, 
  dateOfBirth: Date
}

type Order = {
  articles: Article[],
  customer: Customer
}

function totalSum(order: Order) {
  let sum = 0;
  for(let i = 0; order.articles.length; i++) {
    sum += order.articles[i].price * order.articles[i].vat
  }
  return sum;
}

totalSum(defaultOrder)
