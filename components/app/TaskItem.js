import {
  Box,
  Checkbox,
  HStack,
  IconButton,
  MinusIcon,
  Pressable,
  Text
} from 'native-base'
import { memo } from 'react'

const TaskItem = props => {
  const onPressPressable = () => {
    props.showModal(true)
    props.onTaskPress(props.task)
  }

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

          props.onCompleted(props.task.id)
          props.onDelete(props.task.id)
        }}
      />
      <Pressable
        flex='1'
        colorScheme='indigo'
        onPress={ onPressPressable }
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
                props.task.description ? (
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
        onPress={ () => { props.onDelete(props.task.id) }}
      />
    </HStack>
  )
}

export default memo(TaskItem)
