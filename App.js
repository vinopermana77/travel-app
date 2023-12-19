import { StyleSheet } from 'react-native'
import AppNavigation from "./src/navigation"
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <>
    <AppNavigation/>
    <StatusBar barStyle={'dark-content'} backgroundColor={'white'} styles='auto'/>
    </>
    
  )
}

export default App

const styles = StyleSheet.create({})