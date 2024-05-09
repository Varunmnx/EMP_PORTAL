import './index.css'
import { AppShell, Burger, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { FlexBox } from '../../Flexbox/FlexBox';

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
      <AppShell.Header bg={"red"}
      >
      <Burger size="sm" />
        <FlexBox 
          container
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
        >
          <button style={{}} className="logout-button">Logout</button>
          <div style={{ width: "25%", height: "calc(100% - 20px)", backgroundColor: "blue"}}>
            <img style={{ width: "50px", height: "auto", marginRight: "0.5rem" }} src="/shapelined-_JBKdviweXI-unsplash.jpg" alt="Company Logo" />
               <Text size="lg">Management Company</Text>
           </div>
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

      
      <AppShell.Main> 
      
      <div className="main-content">
          {/* Employee cards */}
          <div className="employee-card">
            <h2>Employee Name</h2>
            <p>ID: EMP001</p>
            <p>Task: Task Description</p>
            <p>Time Taken: 2 hours</p>
          </div>
          {/* Additional employee cards can be added here */}
        </div>
      </AppShell.Main>
    </AppShell>
  );
}