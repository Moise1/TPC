import React, { useEffect} from 'react';
import clsx from 'clsx';
import {reportDrawerStyles} from '../StyledComponents'
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link,
} from '@material-ui/core';
import { Toc as TableIcon } from '@material-ui/icons'
import { connect } from 'react-redux';
import { getAllReports } from '../redux/actions/getReportsActions'
import '../assets/styles/drawer.css';

const ReportDrawer = props => {

    const classes = reportDrawerStyles();
    
    useEffect(() => {
        props.getAllReports()
    }, [props.getAllReports])

    const { reports } = props.allReports;
    return (
        <div >
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={clsx(classes.container)}>
                    <List>
                        {
                            reports.map(report => { 
                                const truncatedText = (textInput) => {
                                    return textInput.length > 15 ? `${textInput.substring(0, 15)}...` : textInput
                                };
                                return (
                                   <Link href={`/get-report/${report.id}`} key={report.id} className="drawer-link">
                                        <ListItem button>
                                        <ListItemIcon>
                                            <TableIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={truncatedText(report.report_description)}/>
                                    </ListItem>
                                   </Link>
                                )
                            })
                        }
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

const mapStateToProps = state => {
    return { allReports: state.allReports}
}

const mapDispatchToProps = dispatch => {
    return { getAllReports: () => dispatch(getAllReports()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReportDrawer)