import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./Tabpanel.module.scss";

export default function TabPanel(props) {
  const { children, value, index, subHeading} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
     
    >
      {value === index && (
  
        <Box sx = {{p : 3}}>
          <Typography className={styles["subHeading"]}>{subHeading}</Typography>
          <Typography className={styles["content"]}>{children}</Typography>
        </Box>
       
      )}
    </div>
  );
}
