export const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    mst: '1234567890',
    address: '123 Main St, Anytown, USA',
    phone: '1234567890',
    fax: '1234567890',
    tax: '1234567890',
    tax_code: '1234567890',
    tax_code_name: '1234567890',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    mst: '1234567890',
    address: '123 Main St, Anytown, USA',
    phone: '1234567890',
    fax: '1234567890',
    tax: '1234567890',
    tax_code: '1234567890',
    tax_code_name: '1234567890',
  },
]

export const commondities = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
  },
]

export const shippers = [
  {
    id: 1,
    name: 'Shipper 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Shipper 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Shipper 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Shipper 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Shipper 5',
    price: 500,
  },
]

export const consignees = [
  {
    id: 1,
    name: 'Consignee 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Consignee 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Consignee 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Consignee 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Consignee 5',
    price: 500,
  },
]

export const quotations = [
  {
    id: 1,
    name: 'Quotation 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Quotation 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Quotation 3',
    price: 300,
  },
]

export const quotationDB = {
  air: [
    {
      qNo: 'QAF001',
      customer: 'Customer 1',
      origin: 'CSL',
      dest: 'HKG',
      service: '',
      shipper: 'Shipper 1',
      consignee: 'Consignee 1',
      modify: '2024-01-01',
      effect: '2024-01-01',
      validity: 'Port 1',
      creator: 'Creator 1',
      customerPhone: '1234567890',
    },
    {
      qNo: 'QAF002',
      customer: 'Customer 2',
      origin: 'CSL',
      dest: 'HKG',
      service: '',
      shipper: 'Shipper 2',
      consignee: 'Consignee 2',
      modify: '2024-01-01',
      effect: '2024-01-01',
      validity: 'Port 1',
      creator: 'Creator 2',
      customerPhone: '1234567890',
    },
  ],
  sea: [
    {
      qNo: 'QSF001',
      customer: 'Customer 1',
      POL: 'CSL',
      POD: 'HKG',
      modify: '2024-01-01',
      effect: '2024-01-01',
      validity: 'Port 1',
      issueBy: 'BOD',
      customerPhone: '1234567890',
    },
    {
      qNo: 'QSF002',
      customer: 'Customer 2',
      POL: 'CSL',
      POD: 'HKG',
      modify: '2024-01-01',
      effect: '2024-01-01',
      validity: 'Port 1',
      issueBy: 'BOD',
      customerPhone: '1234567890',
    },
  ],
}

export const quotationDBHeaders = {
  air: [
    {
      label: 'Quotation No',
      key: 'qNo',
    },
    {
      label: 'Customer',
      key: 'customer',
    },
    {
      label: 'Origin',
      key: 'origin',
    },
    {
      label: 'Destination',
      key: 'dest',
    },
    {
      label: 'Service',
      key: 'service',
    },
    {
      label: 'Shipper',
      key: 'shipper',
    },
    {
      label: 'Consignee',
      key: 'consignee',
    },
    {
      label: 'Modify',
      key: 'modify',
    },
    {
      label: 'Effect',
      key: 'effect',
    },
    {
      label: 'Validity',
      key: 'validity',
    },
    {
      label: 'Creator',
      key: 'creator',
    },
  ],
  sea: [
    {
      label: 'Quotation No',
      key: 'qNo',
    },
    {
      label: 'Customer',
      key: 'customer',
    },
    {
      label: 'POL',
      key: 'POL',
    },
    {
      label: 'POD',
      key: 'POD',
    },
    {
      label: 'Modify',
      key: 'modify',
    },
    {
      label: 'Effect',
      key: 'effect',
    },
    {
      label: 'Validity',
      key: 'validity',
    },
    {
      label: 'Issue By',
      key: 'issueBy',
    },
  ],
}
