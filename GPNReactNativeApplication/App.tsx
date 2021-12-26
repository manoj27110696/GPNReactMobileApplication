import { StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen  from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen'; 
import ImageScreen from './src/screens/ImageScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack= createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer> 
      {/* <Stack.Navigator>
        <Stack.Screen 
        name='Home'
        component={HomeScreen}/>
        <Stack.Screen
        name='Details'
        component={DetailsScreen}/>
        <Stack.Screen
        name='ImageView'
        component={ImageScreen}/>
      </Stack.Navigator> */
      <Tab.Navigator initialRouteName='App_to_Home'>
        <Tab.Screen name="App_to_Home" component={HomeScreen} />
        <Tab.Screen name='Details_to_Details' component={DetailsScreen} />
        <Tab.Screen name="Home_to_Details" component={DetailsScreen} />
        <Tab.Screen name= "ImageView" component ={ImageScreen}/>
      </Tab.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
