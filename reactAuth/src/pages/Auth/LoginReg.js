import { Grid,Card,Typography,Tabs,Tab,Box } from "@mui/material"
import pic1 from '../../picture/pic1.png'
import { useState } from "react"
import UserLogin from "./UserLogin"
import Registration from "./Registration"
import {ShoppingBag} from '@mui/icons-material'


const TabPanel=(props)=>{
    const {children, value, index}=props;
    return (
        <div role='tabpanel' hidden={value !==index}>
            {
                value===index &&(
                    <Box> {children}</Box>
                )
            }
        </div>
    )
        
    
    }

const LoginReg = () => {
  const [value, setValue] = useState(0)
  const handleChange=(event,newValue)=>{
    setValue(newValue);
  }
  return (
    <>
        <Grid container sx={{height:'90vh'}}>
            <Grid item sm={5} lg={7} sx={{backgroundImage:`url(${pic1})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:'center',
            display:{xs:'none', sm:'block'}}}>
            </Grid>
            <Grid item sm={7} lg={5} xs={12}>
                <Card sx={{width:'100%',height:'100%'}}>
                    <Box sx={{mx:3, height:520}} >
                        <Box sx={{borderBottom:1, borderColor:'divider'}}>
                            <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                                <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                                <Tab label='Registration' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}> <UserLogin/> </TabPanel>        
                        <TabPanel value={value} index={1}> <Registration/> </TabPanel>
                    </Box>
                    <Box textAlign='center' sx={{ mt: 2 }}>
                        <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Geek-Shop</Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}

export default LoginReg