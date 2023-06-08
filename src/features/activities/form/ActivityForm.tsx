import React, {  useEffect, useState } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../../app/common/form/textInput';
import TextArea from '../../../app/common/form/textArea';
import SelectInput from '../../../app/common/form/selectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions';
import DateInput from '../../../app/common/form/dateInput';

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { id } = useParams();
    const navigate = useNavigate();
    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: null,
        city: '',
        venue: '',
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required!'),
        description: Yup.string().required('The activity description is required!'),
        category: Yup.string().required('The activity category is required!'),
        date: Yup.string().required('Date is required!').nullable(),
        city: Yup.string().required('The activity city is required!'),
        venue: Yup.string().required('The activity venue is required!')
    })

    useEffect(() => {
        if (id) activityStore.loadActivity(id).then(activity => setActivity(activity!))
    }, [id, activityStore.loadActivity])

    function handleFormSubmit(activity: Activity) {
        if (!activity.id) {
            activity.id = uuid();
            activityStore.createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
        else {
            activityStore.updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }

    }

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={activity}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <TextInput placeholder='Title' name='title' label='Title'></TextInput>
                        <TextArea rows={3} placeholder='Description' name='description' label='Description' />
                        <SelectInput placeholder='Category' name='category' label='Category' options={categoryOptions} />
                        <DateInput
                            placeholderText='Date'
                            name='date'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm aa'
                        />
                        <TextInput placeholder='City' name='city' label='City' />
                        <TextInput placeholder='Venue' name='venue' label='Venue' />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={activityStore.loading}
                            floated='right'
                            positive
                            type='submit'
                            content='Submit' />
                        <Button as={Link} to={`/activities/${activity.id}`} floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
})