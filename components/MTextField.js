import {
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
  WarningOutlineIcon
} from 'native-base'
import { useState } from 'react'

function MTextField ({
  isReadOnly = false,
  label,
  type = 'text',
  srcIcon,
  validation,
  helpText,
  errorMessage
}) {
  const [error, setError] = useState(false)

  const handleChangeText = text => {
    if (!validation) return

    if (text === '') {
      setError(false)
      return
    }

    setError(validation(text))
  }

  return (
    <FormControl
      isReadOnly = { isReadOnly }
      isDisabled = { isReadOnly }
      isRequired
      isInvalid={ error }
      flex='1'
    >
      <VStack>
        {
          label ? (
            <FormControl.Label>
              <Text fontSize='16'>{ label }</Text>
            </FormControl.Label>
          ) : null
        }
        <InputGroup>
          <Input
            type={ type }
            fontSize='16'
            flex='1'
            onChangeText={ handleChangeText }
          />
          {
            srcIcon ? (
              <InputRightAddon>
                <Image
                  source={ srcIcon }
                  alt='Input icon'
                  _web={{
                    width: '32px',
                    height: '32px'
                  }}
                />
              </InputRightAddon>
            ) : null
          }
        </InputGroup>
        {
          errorMessage ? (
            <FormControl.ErrorMessage leftIcon={ <WarningOutlineIcon size='xs' /> }npx >
              { errorMessage }
            </FormControl.ErrorMessage>
          ) : null
        }
        {
          helpText && !error ? (
            <FormControl.HelperText>{ helpText }</FormControl.HelperText>
          ) : null
        }
      </VStack>
    </FormControl>
  )
}

export default MTextField
