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
import { memo } from 'react'

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
        isChecked={ false }

        onChange={() => {
          if (props.task.isCompleted) return

          props.onCompleted(props.index)
          props.onDelete(props.index)

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
              bg={ isPressed ? 'indigo.100' : isHovered ? 'indigo.50' : null }
            >
              <Text isTruncated fontSize='16'>{ props.task.title }</Text>
              {
                props.description ? (
                  <Text isTruncated color='muted.600'>{ props.task.description }</Text>
                ) : null
              }
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

export default memo(TaskItem)
