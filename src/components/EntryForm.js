import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({description, setDescription, isExpense, setIsExpense, value, setValue}) {

    return (
        <Fragment>
            <Form.Group widths={3}>
                <Form.Input
                    icon={'tags'}
                    width={12}
                    label='Description'
                    placeholder='New shinny thing'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    icon={'dollar'}
                    iconPosition='left'
                    width={4}
                    label='100.00'
                    placeholder='New shinny thing'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label='is expense'
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)} />
            </Segment>
        </Fragment>
    )
}

export default EntryForm