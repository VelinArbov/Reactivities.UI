import { observer } from "mobx-react-lite"
import { useStore } from "../../app/stores/store"
import { Tab } from "semantic-ui-react"
import ProfilePhotos from "./ProfilePhotos"
import { Profile } from "../../app/models/profile"

interface Props{
    profile: Profile
}

export default observer(function ProfileContent({profile} : Props) {
    const panes = [
        {menuItem: 'About', render: ()=> <Tab.Pane>About Content</Tab.Pane>},
        {menuItem: 'Photos', render: ()=> <ProfilePhotos profile={profile}/>},
        {menuItem: 'Events', render: ()=> <Tab.Pane>Events Content</Tab.Pane>},
        {menuItem: 'Followers', render: ()=> <Tab.Pane>Followers Content</Tab.Pane>},
        {menuItem: 'Following', render: ()=> <Tab.Pane>Following Content</Tab.Pane>}
    ]
    const { userStore } = useStore()
    return (
        <Tab 
        menu={{fluid: true, vertical: true}}
        menuPosition="right"
        panes={panes}/>
    )
})