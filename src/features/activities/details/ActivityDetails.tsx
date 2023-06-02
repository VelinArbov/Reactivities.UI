import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';



export default function ActivityDetails() {
  const {activityStore} = useStore();

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
                    <Button onClick={() => activityStore.openForm(activityStore.selectedActivity?.id)} basic color='blue' content='Edit' />
                    <Button onClick={activityStore.cancelSelectedActivity} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}