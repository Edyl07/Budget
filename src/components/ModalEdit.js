import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function ModalEdit({ isOpen, setIsOpen, description, setDescription, isExpense, setIsExpense, value, setValue }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    setDescription={setDescription}
                    value={value}
                    setValue={setValue}
                    isExpense={isExpense}
                    setIsExpense={setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} positive>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit