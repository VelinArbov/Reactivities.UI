import React from 'react'
import { Profile } from '../../app/models/profile'
import { observer } from 'mobx-react-lite'
import { Card, Icon, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

interface Props {
    profile: Profile
}

export default observer (function ProfileCard({ profile }: Props) {
    return (
        <Card as={Link} to={`/profles/${profile.userName}`}>
            <Image src={profile.image || '/assets/user.png'}/>
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>{profile.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                222 followers
            </Card.Content>
        </Card>
    )
})