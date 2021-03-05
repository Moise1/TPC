import React, {Fragment} from 'react';
import ReportDrawer from './ReportDrawer'
import NewReport from './NewReport';

const CreateReport = () => {
    return (
        <Fragment>
            <ReportDrawer/>
            <NewReport/>
        </Fragment>
    )
}

export default CreateReport;
