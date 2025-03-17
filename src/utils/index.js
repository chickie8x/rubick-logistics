import { format } from 'date-fns'

export const vndCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}

export const usdCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}

export const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US').format(value)
}

export const bkNoDate = () => {
  return format(new Date(), 'yyMM')
}
