import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import './RegistrationForm.css';
import Login from './login/LoginForm';
import Signup from './signup/SignupForm';

export default function RegistrationContainer(props) {
  const [value, setValue] = useState(props.tab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={"registration-container"}>
      <Box>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} centered>
              <Tab label="Login" value={0} />
              <Tab label="Signup" value={1} />
            </TabList>
          </Box>
          <div className={"registration-panels"}>
            <TabPanel value={0}><Login /></TabPanel>
            <TabPanel value={1}><Signup /></TabPanel>
          </div>

        </TabContext>
      </Box>
    </div>
  );
}