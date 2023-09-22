import {
  Box,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Input,
  VStack
} from 'native-base'
import TaskItem from './TaskItem'
import { useState } from 'react'
import EditTaskModal from './EditTaskModal'
import { MaterialIcons } from '@expo/vector-icons'; 

const createTaskItem = (index, task, onPress, onDelete, onCompleted) => {
  return (
    <TaskItem
      index={ index }
      task={ task }
      showModal={ onPress }
      onDelete={ onDelete }
      onCompleted = { onCompleted }
    />
  )
}

const renderListSpacer = () => <Box height='16px' />
const renderEmptyList = () => (
  <Heading
    size='sm'
    textAlign='center'
    color='muted.400'
  >
    No hay tareas pendientes.
  </Heading>
)

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [showEditModal, setShowEditModal] = useState(false)
  const [title, setTitle] = useState('')

  const addTask = (title) => {
    if (!title) return

    setTasks([...tasks, {
      title: title,
      description: '',
      isCompleted: false
    }])

    setTitle('')
  }

  const deleteTask = index => {
    const _tasks = [...tasks]
    _tasks.splice(index, 1)
    setTasks(_tasks)
  }

  const completeTask = index => {
    setCompletedTasks([...completedTasks, tasks[index]])
    deleteTask(index)

    console.log(completedTasks);
  }

  return (
    <>
      <VStack flex='1' space='4'>
        <HStack
          px='4' pt='4'
          space='2'
          alignItems='center'
        >
          <Input
            flex='1'
            fontSize='16'
            value={ title }
            onChangeText={ text => setTitle(text) }
          />
          <IconButton
            icon={ <MaterialIcons name='add' size={24} color='white' /> }
            variant='solid'
            colorScheme='indigo'
            onPress={ () => addTask(title) }
          />
        </HStack>
        <FlatList
          px='4'
          data={ tasks }
          renderItem={ ({ index, item }) => {
            if (!item.isCompleted) return createTaskItem(index, item, setShowEditModal, deleteTask, completeTask)
          }}
          keyExtractor={ (item, index) => index.toString() }
          ItemSeparatorComponent={ () => renderListSpacer() }
          ListFooterComponent={ () => renderListSpacer() }
          ListEmptyComponent={ () => renderEmptyList() }
        />
      </VStack>
      <EditTaskModal isOpen={ showEditModal } showModal={ setShowEditModal } />
    </>
  )
}

export default TodoList
