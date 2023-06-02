import React, { useState, SyntheticEvent } from 'react';
import { Button, Item, Segment, Label } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer( function ActivityList() {
    const[target, setTarget] = useState('');
    const {activityStore} = useStore();
    
    function handleActivityDelete(event : SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(event.currentTarget.name)
        activityStore.deleteActivity(id);
    }
    
    return (
        <Segment>
            <Item.Group divided>
                {activityStore.activitiesByDate.map((activity) => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => activityStore.selectActivity(activity.id)} floated='right' content="View" color='blue' />
                                <Button name={activity.id} loading={activityStore.loading && target == activity.id} onClick={(e) => handleActivityDelete(e, activity.id)} floated='right' content="Delete" color='red' />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})