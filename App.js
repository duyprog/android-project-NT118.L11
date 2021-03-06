import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import MainMenuStackScreen from './stackScreen/MainMenuStack'
import StaffStackScreen from './stackScreen/StaffStack'
import CartStackScreen from './stackScreen/CartStack'
import MoreStackScreen from './stackScreen/MoreStack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

export const AuthContext = React.createContext();

import RootStackScreen from './screen/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';

const App = () => {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {

      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      { loginState.userToken !== null ? (
          <Tab.Navigator  
          initialRouteName="Home"
          activeColor= "#de5543"
          barStyle={{ backgroundColor: '#fff' }}>
        <Tab.Screen 
            name="Home" 
            component={MainMenuStackScreen} 
            options={{tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons 
                    name="home-outline" 
                    color={color} 
                    size={26} />
              )}} />
        <Tab.Screen 
            name="Cart" 
            component={CartStackScreen} 
            options={{tabBarLabel: '????n h??ng',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons 
                    name="cart-outline" 
                    color={color} 
                    size={26} />
              )}} />
        <Tab.Screen 
            name="Staff" 
            component={StaffStackScreen} 
            options={{tabBarLabel: 'Nh??n s???',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons 
                    name="account-outline" 
                    color={color} 
                    size={26} />
              )}} />
        <Tab.Screen 
            name="More" 
            component={MoreStackScreen} 
            options={{tabBarLabel: 'M??? r???ng',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons 
                    name="layers-outline" 
                    color={color} 
                    size={26} />
              )}} />
      </Tab.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;