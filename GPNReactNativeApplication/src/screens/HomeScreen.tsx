import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


const HomeScreen:FunctionComponent<Props> = ({navigation, route}) => {
  console.log(route);
  const Contact:IContact= route.params.Contact;  /*capturing the route param and using it */
    return (
      <View style={styles.mainView}>
        <Text>Home Screen</Text>
        <Text style={{ fontSize:40}}> {Contact.firstname}{Contact.lastName}</Text>
          <TouchableOpacity style={styles.touchableView}
            onPress={() => {navigation.navigate("Home_to_Details",{Contact:{
              firstname: "Manoj",
              isTelugu: "Y",
              lastName: "Kommagiri",
              number:1
            }}) /*passing Json data as a route parameter in the navigate.navigate */
            }}> 
            <View> 
              <Text style={styles.touchableText}>Contacts1</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableView}
            onPress={() => {navigation.navigate("Home_to_Details",{Contact:{
              firstname: "John",
              isTelugu: "Y",
              lastName: "Doe",
              number:1
            }}) /*passing Json data as a route parameter in the navigate.navigate */
            }}>
              <View> 
              <Text style={styles.touchableText}>Contacts2</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.touchableView}
            onPress={() => {navigation.navigate("Home_to_Details",{Contact:{
              firstname: "Joe",
              isTelugu: "Y",
              lastName: "Smith",
              number: 1
            }}) /*passing Json data as a route parameter in the navigate.navigate */
            }}>
              <View> 
              <Text style={styles.touchableText}>Contacts3</Text>
            </View>
            </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableView:{
    marginBottom:30,
    width:150,
    height:50,
    alignItems:'center',
    backgroundColor: 'orange',
    borderWidth:5,
    borderRadius:10
  },
  touchableText:{
    textAlign:'center',
    paddingTop: 5,
    fontSize:20,
    fontWeight:'bold',
    color: 'white'
  }
});

export default HomeScreen;