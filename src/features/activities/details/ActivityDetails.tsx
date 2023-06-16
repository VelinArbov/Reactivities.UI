import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedASidebar';

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { id } = useParams();

    useEffect(() => {
        if (id) activityStore.loadActivity(id);
    }, [id, activityStore.loadActivity])

    if (activityStore.loadingInitial || !activityStore.selectedActivity) return <LoadingComponent />

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activityStore.selectedActivity} />
                <ActivityDetailedInfo activity={activityStore.selectedActivity} />
                <ActivityDetailedChat activityId={activityStore.selectedActivity.id}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar activity={activityStore.selectedActivity!} />
            </Grid.Column>
        </Grid>
    )
}
)