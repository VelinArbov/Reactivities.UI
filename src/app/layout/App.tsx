import React, { useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponents from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponents content='Loading app' />

  return (
    <>
      <NavBar />
      <Container style={{ margin: '7em' }}>
        <ActivityDashboard/>
      </Container>
    </>
  );
}

export default observer(App);