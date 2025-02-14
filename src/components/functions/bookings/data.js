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
  { label: 'PIC name', key: 'picName' },
  { label: 'PIC phone', key: 'picPhone' },
  { label: 'PIC email', key: 'picEmail' },
  { label: 'Ghi chú', key: 'comment' },
]

export const rows = [
  {
    timestamp: 1727731200000,
    modifiedBy: 'sale',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'Arian',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
    comment: 'Comment 1',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'sale',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'sale',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
    comment: 'Comment 2',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'docs',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'sale',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
    comment: 'Comment 3',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'sale',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'sale',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 4',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'ops',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'sale',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 5',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'sale',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'Arian',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 6',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'leader',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'Arian',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 7',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'ops',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'Arian',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 8',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'docs',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'Arian',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 9',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'docs',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'Arian',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 10',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'docs',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'sale',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 11',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },

  {
    timestamp: 1727731200000,
    modifiedBy: 'docs',
    bkNo: 1,
    month: 1,
    signal: 'OK',
    cusPic: 'RUBIK/2301-0055IL',
    fileNumber: 'RUBIK/2301-0055IL',
    mst: '0107466001',
    customerName: 'TADAVINA',
    insurance: 'x',
    saler: 'sale',
    agent: 'IQ Cargo',
    lclCbm: 2.5,
    twentyDc: 1,
    fortyDcHc: 0,
    frOther: 0,
    vessel: 'Evergreen',
    loadingDate: '2024-01-15',
    cls: 'CLS1',
    etd: '2024-01-17',
    eta: '2024-01-25',
    mnfDeadline: '2024-01-10',
    arrivalActual: '2024-01-26',
    doorOrNot: 'Yes',
    term: 'FOB',
    loadingPort: 'Haiphong',
    destPort: 'Los Angeles',
    mbl: 'MBL123456',
    hbl: 'HBL654321',
    port: 'HP Port',
    containerNumber: 'CONT12345',
    declarationNumber: 'DECL12345',
    lane: 'Green',
    customsProcedure: 'TTHQ123',
    importExport: 'Export',
    etaEtd: 'ETA',
    lcl: true,
    fcl: false,
    costPrice: 500,
    carrier: 'Carrier A',
    returnDate: '2024-01-30',
    confirmationDate: '2024-01-31',
    cfsWarehouse: 'CFS Warehouse 1',
    deliveryAddress: '123 Main St, Hanoi',
    recipient: 'John Doe',
    comment: 'Comment 12',
    picName: 'Alisa',
    picPhone: '0987654321',
    picEmail: 'alisa@example.com',
  },
]
