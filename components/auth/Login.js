import {
  Box,
  Button,
  Heading,
  Link,
  ScrollView,
  Text,
  VStack
} from 'native-base'
import Layout from './Layout'
import MTextField from '../MTextField'
import { validateEmail } from './authRegex'

const Login = ({ navigation }) => {
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
            <Box>
              <MTextField
                label='Password'
                type='password'
                srcIcon={ require('../../assets/password-icon.png') }
              />
              <Link
                mt='1' ml='auto'
                px='2' py='1'
                onPress={ () => navigation.navigate('ForgotPassword') }
              >
                <Text
                  color='indigo.700'
                  fontSize='md'
                  bold
                >
                  Forgot password?
                </Text>
              </Link>
            </Box>
          </VStack>
          <Button
            mt='4' mx='auto'
            size='lg'
            minW='140'
            colorScheme='indigo'
          >
            Login
          </Button>
        </Layout>
        <Button
          mt='4' mx='auto'
          size='lg'
          minW='140'
          variant='subtle'
          colorScheme='indigo'
          onPress={ () => navigation.navigate('SignUp') }
        >
          Create an account
        </Button>
      </Box>
    </ScrollView>
  )
}

export default Login
