import React from 'react'
import {Button ,Dialog, Box, TextField,}  from '@mui/material';
const addContact = () => {
  return (
    <div>
        <Dialog>
            <Box>
                <TextField> Enter first name</TextField>
                <TextField> Enter last name</TextField>
            </Box>
        </Dialog>
      
    </div>
  )
}

export default addContact
