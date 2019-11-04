---
id: navigation
title: Navigation
sidebar_label: Navigation
---

### react-navigation
https://reactnavigation.org/docs/en/getting-started.html

#### Notes

- ##### creating a navigator

  from react-navigation's documentation there's a lot of stuff going on within creating a navigator.
  see from this example :
  ```js
  // You can import Ionicons from @expo/vector-icons if you use Expo or
  // react-native-vector-icons/Ionicons otherwise.
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

  export default createBottomTabNavigator(
    {
      Home: HomeScreen,
      Settings: SettingsScreen,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
            IconComponent = HomeIconWithBadge; 
          } else if (routeName === 'Settings') {
            iconName = `ios-options`;
          }

          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );
  ```
  > this makes it a lot harder to modify.

  - #### SOLUTION
    Separate screen importing from configurations

    - ##### import
    ```js
    import Home from "screens/Home";
    import Settings from "screens/Settings";

    const BottomTab = createBottomTabNavigator({
      Home,
      Settings,
    });
    ```

    - ##### configurations
    ```js
    /* Navigation Options */
    BottomTab.navigationOptions = ({ navigation }) => {
      /*
        Disable swipe gesture if inside the stack
        You can still access the drawer programmatically though by using :
          this.props.navigation.openDrawer();
          this.props.navigation.closeDrawer();
      */
      if (navigation.state.index !== 0) {
        return {
          drawerLockMode: 'locked-closed',
        }
      }

      return {
        drawerLockMode: 'unlocked',
      }
    };
    ```