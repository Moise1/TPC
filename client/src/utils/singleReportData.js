import React, {useEffect, Fragment} from 'react'
import * as reportActions from '../redux/actions/getReportsActions';
import {connect} from 'react-redux';
import ReportDrawer from './ReportDrawer';


export const singleReportData = ()  =>{

   
    return (
        <Fragment>
            <ReportDrawer/>
            <h2>This is a single report</h2>
        </Fragment>
    )

}


const mapStateToProps = state =>{
    return {
        singleReport: state.singleReport.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleReport: (id)=> {dispatch(reportActions.getSingleReport(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleReportData);


