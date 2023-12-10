import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 3,
};

{/* For reference look into the following file - calc_for_everything\calculators\src\mathematical\simple_interest\InfoSI.js */}
// Change the name of the function as the file name
export default function InfoVelocityRootMeanSquareCalc() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span style={{cursor: 'pointer'}}>
      <InfoOutlinedIcon color='primary' onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* For reference look into the following file - calc_for_everything\calculators\src\mathematical\simple_interest\InfoSI.js */}
        <Box sx={style} sm={1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* Calculator Heading */}
            Velocity Root Mean Square Value Calculator
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Definition */}
            The root mean square (RMS) velocity is a measure of the average speed of particles in a gas.
            <br/>
            {/* Replace the below calculator name with yuor calculator name */}
            The formula for calculating Velocity Root Mean Square Value is: 
            <br/>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h3>
                {/* Add calc formula */}
                V<sub>rms</sub> = √((3 * BoltzmannConstant * temp) / (molecularWeight * mh))
              </h3>
            </code>
            <code style={{display: 'flex', justifyContent: 'center'}}>
              <h5>
                {/* Define meaning that each variable convey */}

                Where:
                <br />
                V<sub>rms</sub> = Most Root Mean Square Velocity
                <br />
                BoltzmannConstant = Boltzmann constant (1.380649e-23 J/K)
                <br />
                temp = Temperature (in Kelvins)
                <br />
                
                molecularWeight = Molecular Weight of the fluid
                <br />
                mh = Mass of hydrogen (1.67e-27)
              </h5>
            </code>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
}