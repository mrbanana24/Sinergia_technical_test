import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { useNavigate } from 'react-router-dom';

// Define el estilo de los botones
const buttonStyles = {
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: 3, // Efecto de elevación en hover
    transform: 'translateY(-4px)', // Mover hacia arriba
  },
  margin: '30% 0 30% 0', // Agregar un poco de margen
};

const Sidebar = () =>  {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* Boton Home */}
      <Button sx={buttonStyles}>
        <HomeOutlinedIcon fontSize="large" onClick={() => navigate('/')}/>
      </Button>
      {/* Boton de calendario */}
      <Button sx={buttonStyles}>
        <CalendarTodayOutlinedIcon fontSize="large" onClick={() => navigate('/calendar')} />
      </Button>
    </Box>
  );

  return (
    <div>
      <MenuOpenOutlinedIcon fontSize="large" onClick={toggleDrawer(true)} style={{color:'white', margin:'20px'}}/>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgba(255, 255, 255, .9)',
          },
        }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Sidebar;