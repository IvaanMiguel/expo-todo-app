import {
  Box,
  Button,
  ScrollView,
  VStack
} from 'native-base'
import Layout from './Layout'
import MTextField from '../MTextField'
import { validateEmail } from './authRegex'

const ForgotPassword = ({ navigation }) => {
  return (
    <ScrollView>
      <Box p='4'>
        <Layout>
          <VStack space='4'>
            <MTextField
              label='Email'
              srcIcon={ require('../../assets/email-icon.png') }
              validation={ validateEmail }
              errorMessage={ "Email format not valid." }
            />
          </VStack>
          <Button
            mt='4' mx='auto'
            size='lg'
            minW='140'
            colorScheme='indigo'
          >
            Send email
          </Button>
        </Layout>
        {/* Botón temporal solo para ver la pantalla. */}
        <Button
          mt='4' mx='auto'
          size='lg'
          minW='140'
          variant='subtle'
          colorScheme='indigo'
          onPress={ () => navigation.navigate('ChangePassword') }
        >
          Change your password
        </Button>
      </Box>
    </ScrollView>
  )
}

export default ForgotPassword
