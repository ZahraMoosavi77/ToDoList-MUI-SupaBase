import React from 'react'
import { Box, Button, Typography } from '@mui/material'
export default function Feature() {
    // sx={{'&.MuiButton-root':{backgroundColor:'red'}}}
    return (
        <>
            <Box m={1}   sx={{ display: 'flex', alignItems: 'center', borderRadius: '4px', justifyContent: 'space-between' ,mx:{xs:2,md:3} }}>
                <Typography variant='body2' color='gray.main'  >

                    5 items left
                </Typography>

                <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent:'center' }}   >
                    <Button  >
                        <Typography variant='body2' ml={3} sx={{ textTransform: 'none', color:'gray.main' }}>
                            All
                        </Typography>
                    </Button>
                    <Button >
                        <Typography variant='body2' sx={{ textTransform: 'none', color:'gray.main' }}>
                            Active
                        </Typography>
                    </Button>
                    <Button  >
                        <Typography variant='body2' sx={{ textTransform: 'none', color:'gray.main' }}>
                            Completed
                        </Typography>
                    </Button>
                </Box>
                <Box>
                    <Button>
                        <Typography variant='body2'   sx={{ textTransform: 'none', color:'gray.main' }}
                        >
                            Clear Completed
                        </Typography>
                    </Button>
                </Box>



            </Box>

           
        </>
    )
}
