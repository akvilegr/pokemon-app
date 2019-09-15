import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    formControl: {
        minWidth: 250,
      },
    
  });

const HEIGHT_LEVELS = [{
        string: "less than 1 m",
        lowest_highest: [0, 1]
    },
    {
        string: "between 1 and 2 m",
        lowest_highest: [1, 2]
    },
    {
        string: "between 2 and 3 m",
        lowest_highest: [2, 3]
    },
    {
        string: "more than 3 m",
        lowest_highest: [3, Infinity]
    }

];

export default function WeaknessesFilter(props) {

    const classes = useStyles();

    let heightLevels = HEIGHT_LEVELS;

    return (
      <div>
        { <FormControl className={classes.formControl}>
        <InputLabel htmlFor="height-filter">Filter by height</InputLabel>
        <Select variant="filled" 
        inputProps={{
            name: 'height-filter',
            id: 'height-filter',
          }}
        value={props.value}
          onChange={props.onChange}>
        {<MenuItem value={0}>No filter</MenuItem>}
        {heightLevels.map((value) => {
        return <MenuItem key={value.string} value={value.lowest_highest}>{value.string}</MenuItem>
      })}
        </Select>
      </FormControl> }
    </div>
  );
}