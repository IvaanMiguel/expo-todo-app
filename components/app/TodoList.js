import {
  Box,
  FlatList,
  HStack,
  IconButton,
  VStack
} from 'native-base'
import MTextField from '../MTextField'
import TaskItem from './TaskItem'
import { useState } from 'react'
import EditTaskModal from './EditTaskModal'
import { MaterialIcons } from '@expo/vector-icons'; 

const createTaskItem = (index, onPress) => {
  return (
    <TaskItem
      description={ `Tarea ${index + 1}` }
      showModal={ onPress }
    />
  )
}

const TodoList = () => {
  const data = new Array(20).fill(0)
  const [showEditModal, setShowEditModal] = useState(false)

  return (
    <>
      <VStack flex='1' space='4'>
        <HStack
          px='4' pt='4'
          space='2'
          alignItems='center'
        >
          <MTextField />
          <IconButton
            icon={ <MaterialIcons name='add' size={24} color='white' /> }
            variant='solid'
            colorScheme='indigo'
          />
        </HStack>
        <FlatList
          px='4'
          data={ data }
          renderItem={ ({ index }) => createTaskItem(index, setShowEditModal) }
          ItemSeparatorComponent={ () => <Box height='16px' /> }
          ListFooterComponent={ () => <Box height='16px' /> }
        />
      </VStack>
      <EditTaskModal isOpen={ showEditModal } showModal={ setShowEditModal } />
    </>
  )
}

export default TodoList
