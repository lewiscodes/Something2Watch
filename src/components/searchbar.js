import React from 'react'
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default (props) => {

  const theme = createMuiTheme({
    palette: {
      primary: grey
    }
  });

  return (
    <div style={props.styles.search}>
      <MuiThemeProvider theme={theme}>
        <TextField
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
          placeholder={"Search"}
          label={props.placeholder}
          fullWidth={true}
          error={props.error}
        />
      </MuiThemeProvider>
    </div>
  );
}