import {
  Button,
  HStack,
  Heading,
  IconButton,
  Input,
  Modal,
  TextArea,
  VStack,
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'; 
import { useEffect, useState } from 'react';

const EditTaskModal = props => {
  const [editTitle, setEditTitle] = useState(false)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const resetModal = () => {
    props.showModal(false)
    setEditTitle(false)
  }

  useEffect(() => {
    setTaskTitle(props.task.title ?? '')
    setTaskDescription(props.task.description ?? '')
  }, [props.task])

  console.log('Re rendering.');

  return (
    <Modal
      isOpen = { props.isOpen }
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
              <Input
                flex='1'
                fontSize='16'
                isReadOnly={ !editTitle }
                isDisabled={ !editTitle }
                onChangeText={ setTaskTitle }
                value={ taskTitle }
              />
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
              onChangeText={ setTaskDescription }
              value={ taskDescription }
            />
            <HStack space='2' justifyContent='flex-end'>
              <Button
                size='lg'
                variant='ghost'
                colorScheme='indigo'
                onPress={ resetModal }
              >
                Cancel
              </Button>
              <Button
                size='lg'
                colorScheme='indigo'
                onPress={ () => {
                  props.updateTask(props.task.id, taskTitle, taskDescription)
                  resetModal()
                }}
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
