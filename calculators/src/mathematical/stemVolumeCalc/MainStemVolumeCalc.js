import React from 'react';
import { Container, Typography } from '@mui/material';
import InfoStemVolumeCalc from './InfoStemVolumeCalc';

function MainStemVolumeCalc(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Stem Volume Calculator <InfoStemVolumeCalc/></Typography>
            <hr/>
            <br/>
            {/* Write your code here */}



            {/* End your code here */}
        </Container>
    )
}

export default MainStemVolumeCalc;