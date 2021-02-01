import axios from 'axios';
import lodash from 'lodash';

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
const rowItems = [...Array(n)].map(() => '');

export const hotSettings = {
    colHeaders,
    rowHeaders: true,
    rowHeights: 30,
    minSpareRows: 1,
    width: 600,
    data: [rowItems],
    contextMenu: true,
    formulas: true,
    autoColumnResize: true,
    licenseKey: "non-commercial-and-evaluation",
    darkMode: true,
    afterChange: async function (change, src) {
        // restore table after reload of a page
        const currentReportId = window.location.pathname.split('/')[2];
        if (currentReportId) {
            const singleReportData = await axios.get(`/get-report/${parseInt(currentReportId)}`);
            const newReportData = new Array(Object.values(lodash.omit(singleReportData.data, ['id', 'userId', 'createdAt, updatedAt'])));
            this.loadData(newReportData)
            this.render();
            return;
        }
        if (src === "loadData") {
            // load data from local storage
            if (localStorage['data']) {
                const data = JSON.parse(localStorage['data']);
                console.log("PARSED REPORT DATA", data);
                this.loadData(data);
                this.render();
                return;
            }
        } else {
            // save all data to local storage if the edit happens.
            // const dataRow = this.getData();
            localStorage['data'] = JSON.stringify(this.getData());
        }
    }
}