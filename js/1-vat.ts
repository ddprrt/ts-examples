function addVAT(price: number, vat = 0.2) {
  return price * (1 + vat)
}

addVAT(100)
