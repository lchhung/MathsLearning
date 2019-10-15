
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconWithBadge } from './src/components/welcome/IconWithBadge';
import { LearnAllScreen } from './src/components/LearnAll/LearnAllScreen';
import { AllPracticeScreen } from './src/components/Practices/AllPracticeScreen';
import {SplashScreen} from './src/components/welcome/SplashScreen';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  timeLapse = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('close time') },
        1000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.timeLapse();

    if (data !== 0) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    } else{
    return <AppContainer />;
  }
}
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  // return <IconWithBadge {...props} badgeCount={9} />;
  return <IconWithBadge {...props} badgeCount={9} />;
};

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'LEARNING') {
    iconName = `ios-book`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  }
  else {
    iconName = 'ios-calculator';
    IconComponent = HomeIconWithBadge;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={35} color={tintColor} />;
};

const RootStack = createBottomTabNavigator(
  {
    LEARNING: LearnAllScreen,
    PRACTICE: AllPracticeScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) =>
        getTabBarIcon(navigation, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'teal',
      inactiveTintColor: 'dimgray',
      showIcon: 'true',
      //showLabel: (Platform.OS !== 'android'),// No label for Android
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: 'white',
      },

    },

  }
);
const AppContainer = createAppContainer(RootStack);
//AppRegistry.registerComponent('App', () => App)


