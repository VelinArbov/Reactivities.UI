import React, { useEffect } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const {id} = useParams();

    useEffect (() => {
        if(id) activityStore.loadActivity(id);
    },[id, activityStore.loadActivity])

    if(activityStore.loadingInitial || !activityStore.selectedActivity) return <LoadingComponent />

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activityStore.selectedActivity?.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activityStore.selectedActivity?.title}</Card.Header>
                <Card.Meta>
                    <span >{activityStore.selectedActivity?.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activityStore.selectedActivity?.description}.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button as={Link} to={`/edit/${activityStore.selectedActivity.id}`} basic color='blue' content='Edit' />
                    <Button as={Link} to='/activities' basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
)