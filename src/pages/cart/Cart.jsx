import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Button, Grid } from '@mui/material';
import CartItem from '../../components/cart/CartItem';
import { NavBar } from '../../components/nav-bar';

const CartWrapper = styled('div')({
    padding: 20,
});

const MyButton = styled(Button)({
    padding: 10,
    fontWeight:600,
    
})
  


const Cart = () => {
    return (
        <>  
            <NavBar></NavBar>
            <CartWrapper>
                <Typography variant='h4' align='center'>
                    <Box sx={{ fontWeight: 300, color:'#2CA019'}}> Shopping Cart</Box>
                </Typography>
                <Grid   
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ padding: 5, pt:1 }}>

                    <MyButton variant="outlined" sx={{color:'#2CA019', borderColor: '#2CA019'}}>
                        CONTINUE SHOPPING
                    </MyButton>

                    <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">

                        <CartItem/>
                        
                    </Grid>
                </Grid>
            </CartWrapper>
        </>
    );
}

export default Cart