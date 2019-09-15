import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Header() {

const APP_TITLE = "Pokemon App";
  
    return (
      <div>
        <Typography align="center" variant="h1" gutterBottom>
          {APP_TITLE}
        </Typography>
    </div>
  );
}