export const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@gmail.com',
    role: 'admin',
    department: 'BOD',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    active: true,
    password: '12345678',
  },
  {
    id: 2,
    username: 'leader',
    email: 'leader@gmail.com',
    role: 'leader',
    department: 'Ops',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    active: true,
    password: '12345678',
  },
  {
    id: 3,
    username: 'staff',
    email: 'staff@gmail.com',
    role: 'staff',
    department: 'Ops',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    active: true,
    password: '12345678',
  },
  {
    id: 4,
    username: 'director',
    email: 'director@gmail.com',
    role: 'director',
    department: 'Docs',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    active: true,
    password: '12345678',
  },
  {
    id: 5,
    username: 'sale',
    email: 'sale@gmail.com',
    role: 'staff',
    department: 'Sale',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    active: true,
    password: '12345678',
  },
]

export const departments = [
  {
    key: 'ops',
    value: 'Ops',
  },
  {
    key: 'docs',
    value: 'Docs',
  },
  {
    key: 'bod',
    value: 'BOD',
  },
  {
    key: 'accountant',
    value: 'Accountant',
  },
]

export const permissions = [
  {
    key: 'staff',
    value: 1,
  },
  {
    key: 'leader',
    value: 2,
  },
  {
    key: 'director',
    value: 3,
  },
  {
    key: 'bod',
    value: 4,
  },
  {
    key: 'admin',
    value: 5,
  },
]

export const headers = [
  { label: 'BK. NO', key: 'bkNo' },
  { label: 'Month', key: 'month' },
  { label: 'Signal', key: 'signal' },
  { label: 'CUS PIC', key: 'cusPic' },
  { label: 'Số File', key: 'fileNumber' },
  { label: 'MST', key: 'mst' },
  { label: 'Tên Khách Hàng', key: 'customerName' },
  { label: 'MUA BẢO HIỂM', key: 'insurance', sortable: false, filterable: true },
  { label: 'Saler', key: 'saler' },
  { label: 'Agent', key: 'agent' },
  { label: 'LCL (cbm)', key: 'lclCbm' },
  { label: "20'DC (Trên 10t)", key: 'twentyDc' },
  { label: "40'DC/40'HC", key: 'fortyDcHc' },
  { label: 'FR/other', key: 'frOther' },
  { label: 'VESSEL', key: 'vessel' },
  { label: 'Loading Date', key: 'loadingDate' },
  { label: 'CLS', key: 'cls' },
  { label: 'ETD', key: 'etd' },
  { label: 'ETA', key: 'eta' },
  { label: 'MNF deadline', key: 'mnfDeadline' },
  { label: 'Arrival actualy', key: 'arrivalActual' },
  { label: 'Door or NOT', key: 'doorOrNot' },
  { label: 'Term', key: 'term' },
  { label: 'Loading Port', key: 'loadingPort' },
  { label: 'Dest Port', key: 'destPort' },
  { label: 'MBL', key: 'mbl' },
  { label: 'HBL', key: 'hbl' },
  { label: 'Cảng', key: 'port' },
  { label: 'Số Cont/Chì', key: 'containerNumber' },
  { label: 'Số tờ Khai', key: 'declarationNumber' },
  { label: 'Luồng', key: 'lane' },
  { label: 'TTHQ', key: 'customsProcedure' },
  { label: 'X/N', key: 'importExport' },
  { label: 'ETA/ETD', key: 'etaEtd' },
  { label: 'LCL', key: 'lcl' },
  { label: 'FCL', key: 'fcl' },
  { label: 'Giá Cost Mua', key: 'costPrice' },
  { label: 'Nhà xe', key: 'carrier' },
  { label: 'Ngày trả', key: 'returnDate' },
  { label: 'Xác nhận Trả hàng (ngày)', key: 'confirmationDate' },
  { label: 'Cảng/Kho CFS', key: 'cfsWarehouse' },
  { label: 'Địa chỉ nhận hàng', key: 'deliveryAddress' },
  { label: 'Người nhận', key: 'recipient' },
]

export const generalFields = [
  { label: 'BK. NO', key: 'bkNo' },
  { label: 'Month', key: 'month' },
  { label: 'Signal', key: 'signal' },
  { label: 'CUS PIC', key: 'cusPic' },
  { label: 'Số File', key: 'fileNumber' },
  { label: 'MST', key: 'mst' },
  { label: 'Tên Khách Hàng', key: 'customerName' },
  { label: 'MUA BẢO HIỂM', key: 'insurance', sortable: false, filterable: true },
  { label: 'Saler', key: 'saler' },
  { label: 'Agent', key: 'agent' },
]

export const docsFields = [
  { label: 'LCL (cbm)', key: 'lclCbm' },
  { label: "20'DC (Trên 10t)", key: 'twentyDc' },
  { label: "40'DC/40'HC", key: 'fortyDcHc' },
  { label: 'FR/other', key: 'frOther' },
  { label: 'VESSEL', key: 'vessel' },
  { label: 'Loading Date', key: 'loadingDate' },
  { label: 'CLS', key: 'cls' },
  { label: 'ETD', key: 'etd' },
  { label: 'ETA', key: 'eta' },
  { label: 'MNF deadline', key: 'mnfDeadline' },
  { label: 'Arrival actualy', key: 'arrivalActual' },
  { label: 'Door or NOT', key: 'doorOrNot' },
  { label: 'Term', key: 'term' },
  { label: 'Loading Port', key: 'loadingPort' },
  { label: 'Dest Port', key: 'destPort' },
  { label: 'MBL', key: 'mbl' },
  { label: 'HBL', key: 'hbl' },
  { label: 'Cảng', key: 'port' },
  { label: 'Số Cont/Chì', key: 'containerNumber' },
]

export const logsFields = [
  { label: 'Số tờ Khai', key: 'declarationNumber' },
  { label: 'Luồng', key: 'lane' },
  { label: 'TTHQ', key: 'customsProcedure' },
  { label: 'X/N', key: 'importExport' },
  { label: 'ETA/ETD', key: 'etaEtd' },
  { label: 'LCL', key: 'lcl' },
  { label: 'FCL', key: 'fcl' },
  { label: 'Giá Cost Mua', key: 'costPrice' },
  { label: 'Nhà xe', key: 'carrier' },
  { label: 'Ngày trả', key: 'returnDate' },
  { label: 'Xác nhận Trả hàng (ngày)', key: 'confirmationDate' },
  { label: 'Cảng/Kho CFS', key: 'cfsWarehouse' },
  { label: 'Địa chỉ nhận hàng', key: 'deliveryAddress' },
  { label: 'Người nhận', key: 'recipient' },
]
