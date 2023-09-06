import { Box, Button, FormControl, Grid, Input, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ToDoItem from './ToDoItem';
import Feature from './Feature';
import IconButton from '@mui/material/IconButton';

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const URL = 'https://ffynixkjwaerdzmzjpqj.supabase.co';
const APIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmeW5peGtqd2FlcmR6bXpqcHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDI3MDcsImV4cCI6MjAwOTU3ODcwN30.4FLlR5dC6ge8mnzXnOI1XSL3n3wBnXOHdVJTn0n77r4';
const supabase = createClient(URL,APIKey)

export default function Screen() {

    const [isDark, setIsDark] = useState(true)
    const [isClick, setIsClick] = useState(false)

    const [value, setValue] = useState('')
    const [toDo, setToDo] = useState('')
     

    const  postData = async ()=>{
        
            const { data, error } = await supabase
            .from('todo')
            .insert([
            { name: value },
            ])
        

    }

    const getData = async ()=>{
        
        let { data, error } = await supabase
        .from('todo')
        .select('*')


        setToDo(data)

        console.log(toDo);
    
        

    }

    useEffect(()=>{
        getData();
    },[])

    

    const formSubmit = (e)=>{
        if ( value.trim() && e.code === 'Enter'){
            setValue('');
          postData();
            
    }

    }

    

    const  inputValueChange = (e)=>{
        const inputChange = e.target.value;
        setValue(inputChange)
        console.log(inputChange);

        
    
    }

    

    const buttonClick = () => {
        setIsClick(!isClick);
        console.log('yes');
    }

    return (
        <Grid container display='flex' justifyContent='center' sx={{
            backgroundImage:{xs:"url('src/assets/images/bg-mobile-light.jpg')",sm:"url('src/assets/images/bg-desktop-light.jpg')"} ,
            backgroundRepeat: 'no-repeat', backgroundSize: '100vw',
        }}>
            <Grid item xs={10} sm={8.5} md={6} lg={4.5} justifyContent='center'  >



                <Box  sx={{
                    display: 'flex',
                     justifyContent:'space-between',alignItems: 'center', mt:{xs:2, md:7}, 
                }}>
                    <Typography component='h1' sx={{ color: 'white', letterSpacing: 10, typography: { xs: 'h2', md: 'h1' } }}>

                        TODO
                    </Typography>


                    <IconButton disableRipple onClick={() => setIsDark(!isDark)} sx={{ mb: 1 }}>

                        {
                            !isDark ? < WbSunnyIcon sx={{ paddingTop: '4px', color: 'white', width: { xs: '20px', md: '30px' }, height: { xs: '40px', md: '50px' }, cursor: 'pointer' }} />
                                : <NightlightRoundIcon sx={{ paddingTop: '4px', color: 'white', width: { xs: '25px', md: '30px' }, height: { xs: '40px', md: '50px' }, cursor: 'pointer' ,}} />} </IconButton>
                </Box>


              
                            <FormControl onChange={ inputValueChange} fullWidth sx={{ mt: { xs: 2, md: 3 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '4px', height: { xs: '40px', md: '60px' }  }}>
                        <Box component='span' sx={{ borderRadius: '50%', border: 1, borderColor: 'gray.light', bgcolor: 'background.paper', width: {xs: '18px', md:'22px'}, height:{xs:'18px',md:'22px'} , mx: {xs:'14px', md:'22px'}, my: {xs:'25px', md:'22px'}, ml:{xs:'20px'} }} >
                        </Box>
                        <Typography  sx={{typography:{xs:'body2', md:'body1'}}}>
                            <Input value={value}  onKeyUp={formSubmit} disableUnderline fullWidth color='gray.main' placeholder='Create a new todo ...' sx={{ font: 'inherit', marginLeft1: '5px', fontFamily: 'font400' }} />
                        </Typography>
                    </Box>
                </FormControl>
                
                           
                

                <Box  borderRadius='4px' bgcolor='white' overflow='hidden' sx={{ boxShadow:{sx:'none', sm:' 0 15px 12px rgba(232,234,244)'}  , mt:{xs:2,md:3}}}>
                    {toDo && toDo.map(()=> <ToDoItem />)}
                   
                    
                    <Feature />
                </Box>


                <Box sx={{  display: { xs: 'flex', sm: 'none' }, alignItems: 'center', justifyContent: 'center', borderRadius: '4px', bgcolor: 'white', height: {xs:'44px', md:'68px'},mt:{xs:2, md:6} }} >
                    <Button onClick={() => buttonClick()} >
                        <Typography variant='body2' sx={{ textTransform: 'none', color: !isClick ?  'gray.main' : 'secondary' }}>
                            All
                        </Typography>
                    </Button>
                    <Button >
                        <Typography variant='body2' sx={{ textTransform: 'none', color: !isClick ? 'gray.main' : 'secondary' }}>
                            Active
                        </Typography>
                    </Button>
                    <Button  >
                        <Typography variant='body2' sx={{ textTransform: 'none', color: !isClick ? 'gray.main' : 'secondary'}}>
                            Completed
                        </Typography>
                    </Button>
                </Box>

                <Typography variant='body2'  sx={{ textAlign: 'center', color:'gray.main', mt:{xs:4,md:8} }}>
                    Drog and drop to reorder list
                </Typography>


            </Grid>
        </Grid>
    )
}
