import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import './Footer.css';
const Footer = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            style={{
            }}
        >
        <div className="footer-div" >
           <div className="inner-1">
           <Typography
                style={{
                    color: "white",
                }}
            >
                FOSS NSBM ABOUT US
            </Typography>

           </div>

            <div className="inner-2">
            <Typography
                style={{
                    color: "white",
                    right: "0",
                    float: "right",
                }}
            >
                Code with Love by FOSS NSBM
            </Typography>
            </div>
        </div>
    </Grid>
    )
}

export default Footer
