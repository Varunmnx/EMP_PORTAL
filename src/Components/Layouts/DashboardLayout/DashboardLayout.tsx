import './index.css'
import { AppShell, Burger, Button, Flex, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { FlexBox } from '../../Flexbox/FlexBox';
import LOGO from '../../../assets/logo.jpg'

export default function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
    header={{ height: 100,  }}
    navbar={{
      width: 300,
      breakpoint: 'sm',
      collapsed: { mobile: !opened },
    }} 
    
  >
      <AppShell.Header 
      >
        <FlexBox 
          container
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          height="100%"
          padding={"0 20px"}
        >
          <FlexBox container alignItems='center'  height={"100%"} style={{gap: "10px"}}>
      <Burger size="sm"  hiddenFrom='sm' onClick={toggle}/>
               <Image h={28} w={28} src={LOGO} alt="Company Logo" />
               <Text size="lg">Management Company</Text>
            </FlexBox>
          <Button bg={'red'} >Logout</Button>
        </FlexBox>
       
      

      </AppShell.Header>
          
      <AppShell.Navbar p="md">
      <div style={{ display: 'flex' }}>
          {/* Sidebar */}
          <div className="sidebar">
            <div className="supervisor-details">
              <h3>Supervisor Name</h3>
              <p>Supervisor Role</p>
            </div>
          </div>
       </div>
      </AppShell.Navbar>

      
      <AppShell.Main mih={'100vh'}> 
        <Outlet />
      </AppShell.Main> 
    </AppShell>
  );
}