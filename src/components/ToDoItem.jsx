import React from 'react'
import { Box ,Input, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

export default function ToDoItem() {
    return (
        <Box borderBottom={1} borderColor='gray.light' sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', }}>
            <Box component='span'  sx={{ borderRadius: '50%', border: 1, borderColor: 'gray.light', bgcolor: 'background.paper',  width: {xs: '18px', md:'22px'}, height:{xs:'18px',md:'22px'},
             mx: {xs:'14px', md:'22px'}, my: {xs:'12px', md:'22px'}, ml:{xs:'20px'}, cursor:'pointer',display:'flex'
     ,justifyContent:'center', alignItems:'center' ,backgroundImage:'linear-gradient(#57ddff,#c058f3)' }} >  <CheckIcon sx={{color:'white'}} fontSize='small'/>
            </Box>
            <Typography variant='body1'>

                    <Input disableUnderline fullWidth color='gray.main' sx={{ font: 'inherit', fontWeight: '500', marginLeft1: '5px' }} />
            </Typography>
           
        </Box>
    )
}
