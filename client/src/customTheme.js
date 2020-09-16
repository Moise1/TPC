import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles'

export const customTheme = createMuiTheme({
    overrides:{

        MuiTextField: {
            root: {
                backgroundColor: 'none',
            },
        },
        MuiInputBase: {
            input: {
                color: "#000",
                "&$focused": {
                    color: "#000"
                }
            },
            focused: {},
        },
    }
});