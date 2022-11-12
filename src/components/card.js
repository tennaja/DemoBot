import { Box } from '@material-ui/core';
import React from 'react'
import Card from './Card.js'


const Carousel = () => {
    return (
    <>
        <Box component='div' display='inline'>
            <Card/>
        </Box>
        <Box component='div' display='inline'>
            <Card/>
        </Box>
    </>
    )
}

export default Carousel;