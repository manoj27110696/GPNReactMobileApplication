import { StyleSheet } from 'react-native';
import { NavigationContainer, RouteProp, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen  from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen'; 
import ImageScreen from './src/screens/ImageScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  App_to_Home: { 
    Contact:{
      firstname: string,
      isTelugu: string,
      lastName: string,
      number:number
    }
   };
   Details_to_Details:{
    Contact:{
      firstname: string,
      isTelugu: string,
      lastName: string,
      number:number
    }
   };

   Home_to_Details:{
    Contact:{
      firstname: string,
      isTelugu: string,
      lastName: string,
      number:number
    }
   };

   ImageView:{
    Contact:{
      firstname: string,
      isTelugu: string,
      lastName: string,
      number:number
    }
   };

};
const Stack= createStackNavigator();
const Tab = createBottomTabNavigator<RootStackParamList>();


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
      <Tab.Navigator  initialRouteName='App_to_Home' screenOptions={{
        headerTintColor:'white',
        headerStyle:{backgroundColor: 'orange'}
      }}>
        <Tab.Screen 
        name="App_to_Home" 
        component={HomeScreen} 
        initialParams={{Contact:{
         firstname: "Manoj",
         isTelugu: "Y",
         lastName: "Kommagiri",
         number:1
        }
        } }
        options={{
          title:'Home',
          headerTitleStyle:{
            fontWeight:'bold',
            fontSize:30
          }
        }}/>
        <Tab.Screen 
        name='Details_to_Details' 
        component={DetailsScreen}
       />
        <Tab.Screen 
        name="Home_to_Details" 
        component={DetailsScreen}
        options={ ({route})=>({ title: route?.params?.Contact.firstname +' '+ route?.params?.Contact.lastName}
        )}  />
 
        <Tab.Screen 
        name= "ImageView" 
        component ={ImageScreen}
        options={ ({route})=>({ title: route?.params?.Contact.firstname +' '+ route?.params?.Contact.lastName}
        )} />

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
