import {
  Box,
  Checkbox,
  HStack,
  IconButton,
  MinusIcon,
  Pressable,
  Text,
  useToast,
} from 'native-base'

const TaskItem = props => {
  const taskCompletedToast = useToast()
  const taskDeletedToast = useToast()

  return (
    <HStack
      space='2'
      alignItems='center'
    >
      <Checkbox
        size='md'
        colorScheme='success'
        defaultIsChecked={ props.task.isCompleted }
        onChange={ () => {
          props.task.isCompleted = !props.task.isCompleted
          props.onCompleted(props.index)

          taskCompletedToast.show({
            maxW: '320px',
            textAlign: 'center',
            bg: 'success.700',
            color: 'white',
            description: `Task "${props.task.title}" marked as completed.`
          })
        }}
      />
      <Pressable
        flex='1'
        colorScheme='indigo'
        onPress={ () => props.showModal(true) }
      >
        {({ isHovered, isPressed }) => {
          return (
            <Box
              borderRadius='4'
              py='2' px='4'
              bg={ isPressed ? 'indigo.100' : isHovered ? 'indigo.50' : '' }
            >
              <Text isTruncated fontSize='16'>{ props.task.title }</Text>
              <Text isTruncated color='muted.600'>{ props.task.description }</Text>
            </Box>
          )
        }}
      </Pressable>
      <IconButton
        icon={ <MinusIcon /> }
        size='sm'
        colorScheme='danger'
        onPress={ () => {
          props.onDelete(props.index)

          taskDeletedToast.show({
            maxW: '320px',
            textAlign: 'center',
            bg: 'danger.700',
            color: 'white',
            description: `Task "${props.task.title}" deleted.`
          })
        }}
      />
    </HStack>
  )
}

export default TaskItem
