import React, { FunctionComponent } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


const DetailsScreen: FunctionComponent<Props> = ({navigation, route}) => {
  console.log(route);
  const Contact:IContact= route.params.Contact;         /*capturing the route param and using it */
  console.log(Contact);
    return (
      <View style={styles.mainView}>
        <Text>Details Screen</Text>
        <Text style={{fontSize:40}}>{Contact.firstname} {Contact.lastName}</Text> 
        <Text style= {{fontSize:20}}>  isTelugu:{Contact.isTelugu}</Text>
          <Button
            title="Go to Image"
            onPress={() => {
              Contact.number= Contact.number+1;
              console.log(Contact);
              navigation.navigate("ImageView",{Contact: Contact})  /*passing Json data as a route parameter in the navigate.navigate */
            }}/>
            <Button
             title="More Details"
             onPress={() => {
               Contact.number=Contact.number+1;
               console.log(Contact);
               navigation.navigate("Details_to_Details",{Contact: Contact})
            }} />
             <Button 
              title="Go Back a Screen"
              onPress={() => { navigation.goBack()
              }}/>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;