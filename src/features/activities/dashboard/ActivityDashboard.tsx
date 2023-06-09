import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponents from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';

export default observer( function ActivityDashboard() {
    const {activityStore} = useStore();

    useEffect(() => {
      if(activityStore.activityRegistery.size <= 1) activityStore.loadActivities();
    }, [activityStore.loadActivities]);
  
    if (activityStore.loadingInitial) return <LoadingComponents content='Loading activities...' /> 

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
               <ActivityFilters/>
            </Grid.Column>
        </Grid>
    )
})