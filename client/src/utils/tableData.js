
const colHeaders = [
    'Client Name',
    'Report Description',
    'Client Phone',
    'Instiution',
    'TPC Staff',
    'Inspection Date',
    'Valuation Date',
    'Company',
    'Purpose',
    'Valuer',
    'Gross Fees',
    'Paid Advance',
    'Paid Balance',
    'Total Paid',
    'Debts',
    'Inspection Transport',
    'Technician',
    'IRPV',
    'Covers',
    'Envelops',
    'Total Pages',
    'Printing',
    'Picked',
    'Comment'
];


const n = colHeaders.length;
const rowItem = [...Array(n)].map(() => '')

export const tableData = {
    hotSettings: {
        rowHeaders: true,
        rowHeights: 35,
        colHeaders,
        data: [rowItem],
        licenseKey: "non-commercial-and-evaluation"
      },
      darkMode: false
}