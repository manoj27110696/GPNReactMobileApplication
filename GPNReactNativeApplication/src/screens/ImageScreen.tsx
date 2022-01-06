import React, { FunctionComponent } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const ImageScreen:FunctionComponent<Props> = ({navigation, route}) => {
  console.log(route);
  const Contact:IContact=route.params.Contact;
    return (
      <View style={styles.mainView}>
        <Text>Image Screen</Text>
        <Text style={{fontSize:40}}>{Contact.firstname} {Contact.lastName}</Text> 
        <Text style= {{fontSize:20}}>  isTelugu:{Contact.isTelugu}</Text>
          <Button
            title="Go Home"
            onPress={() => {
              Contact.number=Contact.number+1;
              console.log(Contact);
              navigation.navigate("App_to_Home",{Contact:Contact})
            }}/>
            <Button
             title="Go Back"
             onPress={() => { navigation.goback()
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

export default ImageScreen;