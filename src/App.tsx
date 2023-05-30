import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect( () => {
    axios.get('https://localhost:7070/activities').then(response => {
      setActivities(response.data);
    })
  }, []);
  
  return (
    <div >
      <Header as='h2' icon='users' content='Reactivities' />
        <List>
        {
          activities.map((activity: any) => (
            <List.Item key={activity.id}>
            {activity.title}
            </List.Item>
          ))}
      </List>
      <Button content="test"/>
    </div>
  );
}

export default App;