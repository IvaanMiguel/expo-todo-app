import {
  Box,
  Button,
  ScrollView,
  VStack
} from 'native-base'
import Layout from './Layout'
import MTextField from '../MTextField'

const ChangePassword = () => {
  return (
    <ScrollView>
      <Box p='4'>
        <Layout>
          <VStack space='4'>
            <MTextField
              label='New password'
              srcIcon={ require('../../assets/new-password-icon.png') }
            />
            <MTextField
              label='Repeat password'
              srcIcon={ require('../../assets/repeat-password-icon.png') }
            />
          </VStack>
          <Button
            mt='4' mx='auto'
            size='lg'
            minW='140'
            colorScheme='indigo'
          >
            Change password
          </Button>
        </Layout>
      </Box>
    </ScrollView>
  )
}

export default ChangePassword
