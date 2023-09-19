import {
  Button,
  HStack,
  Heading,
  IconButton,
  Modal,
  TextArea,
  VStack
} from 'native-base'
import MTextField from '../MTextField'
import { MaterialIcons } from '@expo/vector-icons'; 
import { useState } from 'react';

const EditTaskModal = props => {
  const [editTitle, setEditTitle] = useState(false)

  const resetModal = () => {
    props.showModal(false)
    setEditTitle(false)
  }

  return (
    <Modal
      isOpen={ props.isOpen }
      size='xl'
      onClose={ () => resetModal()}
    >
      <Modal.Content>
        <Modal.Header>
          <Heading size='md'>Edit task</Heading>
        </Modal.Header>
        <Modal.CloseButton />
        <Modal.Body>
          <VStack space='4'>
            <HStack
              space='2'
              alignItems='center'
            >
              <MTextField isReadOnly={ !editTitle } />
              <IconButton
                icon={
                  <MaterialIcons
                    name={ editTitle ? 'save' : 'edit' }
                    size={24}
                    color='white'
                  />
                }
                variant='solid'
                colorScheme={ editTitle ? 'success' : 'indigo'}
                onPress={ () => setEditTitle(!editTitle) }
              />
            </HStack>
            <TextArea
              fontSize='14'
              placeholder='Add a description...'
            />
            <HStack space='2' justifyContent='flex-end'>
              <Button
                size='lg'
                variant='ghost'
                colorScheme='indigo'
                onPress={ () => resetModal() }
              >
                Cancel
              </Button>
              <Button
                size='lg'
                colorScheme='indigo'
              >
                Save
              </Button>
            </HStack>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}

export default EditTaskModal
