import {Typography} from "@mui/material";
import {styleSheet} from "./style";
import {withStyles} from '@mui/styles';
import React, {Component, Fragment} from 'react';
import NavBar from "../../../components/common/NavBar";
import {Link, Route} from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

class DashBoard extends Component {
    constructor(props) {
        super(props);

    }



    render() {

        const { classes } = this.props;
        const itemData = [
            {
                img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                title: 'Breakfast',
                rows: 2,
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                title: 'Burger',
            },
            {
                img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                title: 'Camera',
            },
            {
                img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                title: 'Coffee',
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                title: 'Hats',
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                title: 'Honey',
                author: '@arwinneil',
                rows: 2,
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                title: 'Basketball',
            },
            {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                title: 'Fern',
            },
            {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                title: 'Mushrooms',
                rows: 2,
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                title: 'Tomato basil',
            },
            {
                img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                title: 'Sea star',
            },
            {
                img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                title: 'Bike',
                cols: 2,
            },
        ];
        return (
            <Fragment>
                <div>
                    <Link to="/"
                          style={{position: 'absolute', left: 1100, textDecoration: "none", color: 'black'}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Home' wrapped={false}/></Link>
                    <Link to="customer"
                          style={{position: 'absolute', left: 1200, textDecoration: "none", color: 'black'}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Customer' wrapped={false}/></Link>
                    <Link to="item"
                          style={{position: 'absolute', left: 1330, textDecoration: "none", color: 'black'}}><NavBar
                        disabled={false} disableFocusRipple={false} disableRipple={false} iconPosition='top'
                        label='Item' wrapped={false}/></Link>
                </div>
                <div className={classes.title}>
                    <Typography variant="h4">DashBoard</Typography>
                </div>
                <ImageList sx={{ width: 1000, height: 450, position:'absolute',top:150,left:250}} variant="woven" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </Fragment>

        )
    }
}

export default withStyles(styleSheet)(DashBoard)