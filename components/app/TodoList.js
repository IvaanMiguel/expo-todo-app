import {
  Box,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Input,
  VStack,
} from 'native-base'
import TaskItem from './TaskItem'
import { memo, useCallback, useState } from 'react'
import EditTaskModal from './EditTaskModal'
import { MaterialIcons } from '@expo/vector-icons'; 

import uuid from 'react-native-uuid'

const AddTaskInput = memo(props => {
  const [title, setTitle] = useState('')

  const onAddTask = () => {
    props.addTask(title)
    setTitle('')
  }

  return (
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
        onPress={ onAddTask }
      />
    </HStack>
  )
})

const createTaskItem = props => <TaskItem { ...props }/>
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

const TasksList = memo(props => {
  const renderTaskItem = e => {
    if (e.item.isCompleted) return

    return createTaskItem({
      task: e.item,
      showModal: props.setShowEditModal,
      onDelete: props.deleteTask,
      onCompleted: props.completeTask,
      onTaskPress: props.setModalTask
    })
  }

  const keyExtractor = item => `${item.id}`

  return (
    <FlatList
      px='4'
      data={ props.tasks }
      renderItem={ renderTaskItem }
      keyExtractor={ keyExtractor }
      ItemSeparatorComponent={ renderListSpacer }
      ListFooterComponent={ renderListSpacer }
      ListEmptyComponent={ renderEmptyList }
    />
  )
})

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [showEditModal, setShowEditModal] = useState(false)
  const [modalTask, setModalTask] = useState({})

  const getTaskIndex = id => tasks.map(task => task.id).indexOf(id)

  const addTask = useCallback(title => {
    if (!title) return

    setTasks([...tasks, {
      id: uuid.v4(),
      title: title,
      description: '',
      isCompleted: false
    }])
  }, [tasks])

  const deleteTask = useCallback(id => {
    const _tasks = [...tasks]
    _tasks.splice(getTaskIndex(id), 1)
    setTasks(_tasks)
  }, [tasks])

  const updateTask = (id, newTitle, newDescription) => {
    const index = getTaskIndex(id)

    tasks[index].title = newTitle
    tasks[index].description = newDescription

    // To force a re rendering.
    setTasks([...tasks])
  }

  const completeTask = useCallback(id => {
    const index = getTaskIndex(id)

    tasks[index].isCompleted = true
    setCompletedTasks([...completedTasks, tasks[index]])
  }, [tasks, completedTasks])

  return (
    <>
      <VStack flex='1' space='4'>
        <AddTaskInput addTask={ addTask } />
        <TasksList
          tasks={ tasks }
          setShowEditModal={ setShowEditModal }
          deleteTask={ deleteTask }
          completeTask={ completeTask }
          setModalTask={ setModalTask }
        />
      </VStack>
      <EditTaskModal
        isOpen={ showEditModal }
        showModal={ setShowEditModal }
        task={ modalTask }
        updateTask={ updateTask }
      />
    </>
  )
}

export default TodoList
