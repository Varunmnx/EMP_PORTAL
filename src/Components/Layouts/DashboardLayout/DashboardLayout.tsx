import './index.css'
import { AppShell, Burger, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { FlexBox } from '../../Flexbox/FlexBox';

export default function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
    header={{ height: 100, }}
    navbar={{
      width: 300,
      breakpoint: 'sm',
      collapsed: { mobile: !opened },
    }} 
  >
      <AppShell.Header bg={"red"}>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
          <FlexBox container alignItems='center' backgroundColor='green' justifyContent='center' width={"100%"} height={"100%"} >
            <div  style={{width: "25%", height: "calc(100%-10px)",backgroundColor: "blue" }}>
              <div style={{width: "15%", height:"100%"}}>
                <img src="/shapelined-_JBKdviweXI-unsplash.jpg" alt="" />
              </div>
               <Text size="lg">Management Company</Text>
           </div>
        </FlexBox>


      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main> 
          <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}