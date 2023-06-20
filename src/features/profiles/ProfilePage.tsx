import { observer } from "mobx-react-lite"
import ProfileHeader from "./ProfileHeader"
import { Grid } from "semantic-ui-react"
import ProfileContent from "./ProfileContent"
import { useStore } from "../../app/stores/store"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import LoadingComponents from "../../app/layout/LoadingComponent"

export default observer(function ProfilePage() {
    const { username } = useParams();
    const { profileStore } = useStore();
    const { loadingProfile, loadProfile, profile, setActiveTab } = profileStore;

    useEffect(() => {
        loadProfile(username!);
        return (() => setActiveTab(0));
    }, [loadProfile, username])

    if (loadingProfile) return <LoadingComponents content="Loading profile..." />

    return (
        <Grid>
            <Grid.Column width={16}>
                {profile &&
                    <>
                        <ProfileHeader profile={profile} />
                        <ProfileContent profile={profile} />
                    </>
                }

            </Grid.Column>
        </Grid>
    )
})