import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreenStack= ({navigation,router}) => {
    return(
        <View styles={styles.mainView}>
            <Text>Home Screen Details</Text>
            <Button 
              title=" Go to Details Stack Screen"
              onPress={()=> {navigation.navigate("")}}/>
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

  export default HomeScreenStack;