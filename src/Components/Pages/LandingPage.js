import React from 'react'
import Sidebar from '../Elements/Sidebar'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import { CardItems } from '../Elements/CardItems';
import Card from "../Elements/Card";
import Footer from '../Elements/Footer';
import './LandingPage.css';

const useStyles = makeStyles(() => ({
    root: {
        margin: "0",
    },

    headerBold: {
        fontWeight: "100",
    }

}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
            >
                <Grid item md={1} lg={2} xl={2} className="SidebarGrid">
                    <Sidebar />
                </Grid>
                <Grid item xs={9} md={9} className="CardGrid" >
                    <Box className={classes.cardset} >

                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            spacing={0}
                        >
                            <Grid item>
                                <div className="header">
                                    <h1>
                                        <span className={classes.headerBold}>
                                            Welcome to FOSS Community NSBM
                                        </span>
                                        <br />
                                        Privacy Dashboard!
                                    </h1>
                                </div>
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                    spacing={7}
                                >
                                    {CardItems.map((item, key) => {
                                        return (
                                            <Grid
                                                xl={4}
                                                lg={4}
                                                md={6}
                                                sm={12}
                                                xs={12}
                                                className={classes.gridItem}
                                                item
                                                key={key}
                                            >
                                                <Card icon={item.icon} title={item.title} />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Grid>
                            <Footer />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
