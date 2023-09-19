import {
  Button,
  Checkbox,
  HStack,
  IconButton,
  MinusIcon,
} from 'native-base'

const TaskItem = ({ description, showModal }) => {
  return (
    <HStack
      space='2'
      alignItems='center'
    >
      <Checkbox
        size='md'
        aria-label='Complete task'
        colorScheme='success'
      />
      <Button
        flex='1'
        justifyContent='flex-start'
        size='lg'
        variant='ghost'
        colorScheme='indigo'
        _text={{
          color: 'black',
          isTruncated: 'true',
        }}
        onPress={ () => showModal(true) }
      >
        { description }
      </Button>
      <IconButton
        icon={ <MinusIcon /> }
        size='sm'
        colorScheme='danger'
      />
    </HStack>
  )
}

export default TaskItem
