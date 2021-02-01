import React, { useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import "../assets/styles/single-report.css";
import * as reportActions from '../redux/actions/getReportsActions';
import { connect } from 'react-redux';
import ReportDrawer from './ReportDrawer';
import { hotSettings } from '../utils/HotSettings';
import lodash from 'lodash';

class DisplaySingleReport extends React.Component {

    componentDidMount() {
        const currentReportId = window.location.pathname.split('/')[2];
        this.props.fetchSingleReport(parseInt(currentReportId));
        this.props.fetchAllReports();
    }

    render() {
        const {allReports} = this.props;
        let modifiedSettings = lodash.omit(hotSettings, ['data']);
        
        return (
            <div className="container-fluid table-container">
                <ReportDrawer />
                <h3 className="text-center report-title">Edit Your Report</h3>
                <HotTable
                    className="report-table"
                    id="handson-table"
                    settings={modifiedSettings}
                    // data={allReports}
                    // afterChange={handleAfterChange}
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


const mapStateToProps = state => {
    return {
        singleReport: state.singleReport.result,
        allReports: state.allReports.reports
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleReport: (id) => { dispatch(reportActions.getSingleReport(id)) },
        fetchAllReports: () => { dispatch(reportActions.getAllReports()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySingleReport);