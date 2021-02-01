import React, { useState } from 'react';
import { HotTable } from '@handsontable/react';
import "../assets/styles/new-report.css";
import {hotSettings} from '../utils/HotSettings';
import { Button } from 'react-bootstrap';
import * as actions from '../redux/actions/newReport';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { tokenDecoder } from '../helpers/manageToken';
import ReportDrawer from './ReportDrawer';

const NewReport = props => {

    const token = localStorage.getItem('token');
    const decodedToken = tokenDecoder(token);
    const {id: userId } = decodedToken; 

    const handleSaveData = () => {

        const rowData = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null;
        const recentDataInput = rowData[rowData.length - 2];
        const newReport = {
            client_name: recentDataInput[0],
            report_description: recentDataInput[1],
            client_phone: recentDataInput[2],
            institution: recentDataInput[3],
            tpc_staff: recentDataInput[4],
            inspection_date: recentDataInput[5],
            valuation_date: recentDataInput[6],
            company: recentDataInput[7],
            purpose: recentDataInput[8],
            valuer: recentDataInput[9],
            gross_fees: recentDataInput[10],
            paid_advance: recentDataInput[11],
            paid_balance: recentDataInput[12],
            total_paid: recentDataInput[13],
            debts: recentDataInput[14],
            inspection_transport: recentDataInput[15],
            technician: recentDataInput[16],
            irpv: recentDataInput[17],
            covers: recentDataInput[18],
            envelops: recentDataInput[19],
            total_pages: recentDataInput[20],
            printing: recentDataInput[21],
            picked: recentDataInput[22],
            comment: recentDataInput[23],
            userId,
        }

        props.newReportAction(newReport);
    }

    return (
        <div className="container-fluid table-container">
            <ReportDrawer/>
            <h3 className="text-center report-title">Create Your Report</h3>
            <HotTable
                className="report-table"
                id="handson-table"
                settings={hotSettings}
            />
            <div className="action-btns mt-5 row justify-content-md-center">
                <Button className="btn btn-danger">Reset</Button>
                <Button type="submit" className="btn btn-primary ml-3" >Update</Button>
                <Button type="submit" className="btn btn-success ml-3" onClick={handleSaveData}>Save</Button>

            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        newReportState: state.newReport
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newReportAction: (data) => dispatch(actions.newReportAction(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewReport));