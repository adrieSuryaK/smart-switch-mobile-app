// In App.js in a new project
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;