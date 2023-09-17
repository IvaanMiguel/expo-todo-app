import {
  Box,
  Button,
  Heading,
  ScrollView,
  VStack
} from 'native-base'
import Layout from './Layout'
import MTextField from '../MTextField'
import { validateEmail, validateName } from './authRegex'

const SignUp = ({ navigation }) => {
  return (
    <ScrollView>
      <Box p='4'>
        <Layout>
          <VStack space='4'>
            <MTextField
              label='Name'
              srcIcon={ require('../../assets/user-icon.png') }
              helpText={ "Can't contain numbers." }
              validation={ validateName }
              errorMessage={ "Can't contain numbers." }
            />
            <MTextField
              label='Email'
              srcIcon={ require('../../assets/email-icon.png') }
              validation={ validateEmail }
              errorMessage={ "Email format not valid." }
            />
            <MTextField
              label='Password'
              type='password'
              srcIcon={ require('../../assets/password-icon.png') }
            />
          </VStack>
          <Button
            mt='4' mx='auto'
            size='lg'
            minW='140'
            colorScheme='indigo'
          >
            Sign up
          </Button>
        </Layout>
        <Button
          mt='4' mx='auto'
          size='lg'
          minW='140'
          variant='subtle'
          colorScheme='indigo'
          onPress={ () => navigation.navigate('Login') }
        >
          Login with your account
        </Button>
      </Box>
    </ScrollView>
  )
}

export default SignUp
