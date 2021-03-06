import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch'}}> 
      
        <View style={{ flex: 1, backgroundColor: 'red'}}> 
          <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
            <Text>A</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
            <Text>B</Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
            <Text>C</Text>
          </View>
          <View style={{flex: 1, backfaceVisibility: 'red', justifyContent: 'center', alignItems: 'center'}}>
            <Text>D</Text>
          </View> 
        </View>

        <View style={{ flex: 1, backgroundColor: 'blue', flexDirection: 'row'}}>
          <View style={{flex: 0.25, backgroundColor: 'yellow',justifyContent:'center', alignItems: 'center' }}>
            <Text>A</Text>
          </View>
          <View style={{flex: 0.25, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
            <Text>B</Text>
          </View>
          <View style={{flex: 0.25, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
            <Text>C</Text>
          </View>
          <View style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
            <Text>D</Text>
          </View>
        </View>

      </SafeAreaView>
    );
  }
}