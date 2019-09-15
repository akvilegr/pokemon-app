import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
    searchField: {
        display: 'block',
        margin : '0 auto',
        padding: '50'
    },
    
  });

export default function SearchField(props) {

    const classes = useStyles();

    return (
      <div>
        <TextField
        autoFocus
        id="search-field"
        label="Search by name or type"
        type="search"
        className={classes.searchField}
        margin="normal"
        variant="outlined"
        InputProps={{
            endAdornment: (
            <InputAdornment position="start">
            <SearchIcon />
            </InputAdornment> )
        }}
        onChange={props.onChange}
      />
    </div>
  );
}