import React from 'react';
import { HotTable } from '@handsontable/react';
import "../assets/styles/single-report.css";
import ReportDrawer from './ReportDrawer';
import { hotSettings } from '../utils/HotSettings';
import lodash from 'lodash';
import {withRouter} from 'react-router-dom'


class DisplaySingleReport extends React.Component {


    render() {
        let modifiedSettings = lodash.omit(hotSettings, ['data']);
        
        return (
            <div className="container-fluid table-container">
                <ReportDrawer />
                <h3 className="text-center report-title">Edit Your Report</h3>
                <HotTable
                    className="report-table"
                    id="handson-table"
                    settings={modifiedSettings}
                />
                {/* 
                    <div className="action-btns mt-5 row justify-content-md-center">
                        <Button className="btn btn-danger">Reset</Button>
                        <Button type="submit" className="btn btn-primary ml-3" >Update</Button>
                    </div> */
                }
            </div>
        )
    }

}


export default withRouter(DisplaySingleReport);