export const headersAirFreight = () => [
  { key: 'origin', label: 'Origin' },
  { key: 'destination', label: 'Destination' },
  { key: 'unit', label: 'Unit' },
  { key: 'gw', label: 'GW' },
  { key: 'vat', label: 'VAT %' },
  { key: 'carrier', label: 'Carrier' },
  { key: 'min', label: 'Min' },
  { key: 'minQty', label: 'Min(Qty)' },
  { key: 'under10kg', label: '-10KG' },
  { key: 'under45kg', label: '-45KG' },
  { key: 'upper45kg', label: '+45KG' },
  { key: 'e100kg', label: '100KG' },
  { key: 'e300kg', label: '300KG' },
  { key: 'e1000kg', label: '1000KG' },
  { key: 'fsc', label: 'FSC' },
  { key: 'ssc', label: 'SSC' },
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
    carrier: '',
    vat: '',
    min: '',
    minQty: '',
    under10kg: '',
    under45kg: '',
    upper45kg: '',
    e100kg: '',
    e300kg: '',
    e1000kg: '',
    fsc: '',
    ssc: '',
    gw: '',
    freq: '',
    tt: '',
    cutoff: '',
    vendor: '',
    note: '',
  },
]

export const headersLocalCharges = () => [
  { key: 'desc', label: 'Description' },
  { key: 'unit', label: 'Unit' },
  { key: 'cost', label: 'Cost' },
  { key: 'vat', label: 'VAT %' },
  { key: 'under10kg', label: '-10KG' },
  { key: 'under45kg', label: '-45KG' },
  { key: 'upper45kg', label: '+45KG' },
  { key: 'e100kg', label: '100KG' },
  { key: 'e300kg', label: '300KG' },
  { key: 'e1000kg', label: '1000KG' },
  { key: 'exception', label: 'Exception' },
  { key: 'note', label: 'Note' },
]

export const dataLocalCharges = () => [
  {
    desc: '',
    unit: '',
    cost: '',
    under10kg: '',
    under45kg: '',
    upper45kg: '',
    e100kg: '',
    e300kg: '',
    e1000kg: '',
    vat: '',
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

export const currencySelect =  [
  { value: 'USD', label: 'USD' },
  { value: 'VND', label: 'VND' },
]
