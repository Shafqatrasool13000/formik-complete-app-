import React from 'react'
import './App.css'
import FormikContainer from './components/FormikContainer'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import EnrollmentForm from './components/EnrollmentForm'
import theme from '@chakra-ui/theme'
import { ThemeProvider } from '@chakra-ui/system'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {/* <FormikContainer /> */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}
      </div>
    </ThemeProvider>
  )
}

export default App
