import {
  Box,
  Image,
  VStack
} from 'native-base'

const Layout = ({ children }) => {
  return (
    <Box width='100%'>
      <VStack
        alignItems='center'
        space='4'
        width='100%'
      >
        <Image
          source={ require('../../assets/todo-logo.png') }
          size='xl'
          alt='TODO logo app'
        />
        <Box
          p='5'
          borderRadius='md'
          borderWidth='1'
          borderColor='lightgray'
          width='100%'
        >
          { children }
        </Box>
      </VStack>
    </Box>
  )
}

export default Layout
