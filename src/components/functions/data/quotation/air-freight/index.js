export const headersAirFreight = () => [
  { key: 'origin', label: 'Origin' },
  { key: 'destination', label: 'Destination' },
  { key: 'currency', label: 'Currency' },
  { key: 'unit', label: 'Unit' },
  { key: 'cost', label: 'Cost' },
  { key: 'vat', label: 'VAT %' },
  { key: 'weight', label: 'Weight(Kgs)' },
  { key: 'carrier', label: 'Carrier' },
  { key: 'min', label: 'Min' },
  { key: 'minQty', label: 'Min(Qty)' },
  { key: 'freq', label: 'Freq' },
  { key: 'tt', label: 'TT' },
  { key: 'cutoff', label: 'Cutoff' },
  { key: 'vendor', label: 'Vendor' },
  { key: 'note', label: 'Note' },
]

export const dataAirFreight = () => [
  {
    origin: '',
    destination: '',
    unit: '',
    currency: '',
    cost: '',
    vat: '',
    carrier: '',
    weight: '',
    min: '',
    minQty: '',
    freq: '',
    tt: '',
    cutoff: '',
    vendor: '',
    note: '',
  },
]

export const headersLocalCharges = () => [
  { key: 'desc', label: 'Description' },
  { key: 'currency', label: 'Currency' },
  { key: 'unit', label: 'Unit' },
  { key: 'cost', label: 'Cost' },
  { key: 'vat', label: 'VAT %' },
  { key: 'weight', label: 'Weight(Kgs)' },
  { key: 'exception', label: 'Exception' },
  { key: 'note', label: 'Note' },
]

export const dataLocalCharges = () => [
  {
    desc: '',
    unit: '',
    currency: '',
    cost: '',
    vat: '',
    weight: '',
    exception: '',
    note: '',
  },
]

export const headersOtherCharges = () => {
  const headers = headersLocalCharges()
  headers.push({ key: 'payable', label: 'Payable' })
  return headers
}

export const dataOtherCharges = () => {
  const data = dataLocalCharges()
  data.push({ payable: '' })
  return data
}

export const headersDisbursementFee = () => {
  return headersLocalCharges()
}

export const dataDisbursementFee = () => {
  return dataLocalCharges()
}
