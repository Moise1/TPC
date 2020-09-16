import React, { useState } from 'react';
import { HotTable, HotColumn} from '@handsontable/react';
import "../assets/styles/new-report.css";
import {tableData} from '../utils/tableData';

const NewReport = () => {

    const [data, setData] = useState({...tableData});

    return (
        <div className="container-fluid table-container">
            <HotTable settings={data.hotSettings}/>
        </div>
    )
}

export default NewReport;