import React from 'react';
import {Text,View,} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import NavigationBarBackground from "./components/navigationBarBG";
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <NavigationBarBackground />,
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>HomeScreen!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Home');
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});