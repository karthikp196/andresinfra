import React from 'react';
import {Text , View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Service from './components/Service';
import Partner from './components/Partner';
import Window from './components/Window';
import Matched from './components/Matched';
import OutstandingService from './components/OutstandingService';
import OutstandingProjects from './components/OutstandingProjects';
import WindowService from './components/WindowService';
import ServiceInner from './components/ServiceInner';
import ServiceInnerClosed from './components/ServiceInnerClosed';
import AuditorDashboard from './components/AuditorDashboard';
import AuditorProjects from './components/AuditorProjects';
import MyAccount from './components/MyAccount';
import AuditorOutstanding from './components/AuditorOutstanding';
import AuditorCompleted from './components/AuditorCompleted';
import AuditorWindow from './components/AuditorWindow';
const BottomTabNav = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';

const TopTab = createMaterialTopTabNavigator();


function MyTabs() {
    return (
      <TopTab.Navigator>
      
        <TopTab.Screen name="Outstanding (30)" component={OutstandingProjects} />
        <TopTab.Screen name="Completed (20)" component={Partner} />
      </TopTab.Navigator>
    );
  }

  
function AuditorTab() {
    return (
      <TopTab.Navigator>
      
        <TopTab.Screen name="Outstanding (30)" component={AuditorOutstanding} />
        <TopTab.Screen name="Completed (20)" component={AuditorCompleted} />
      </TopTab.Navigator>
    );
  }

  function Servicetab() {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="Outstanding (20)" component={Service} />
        <TopTab.Screen name="Completed (30)" component={OutstandingService} />
      </TopTab.Navigator>
    );
  }


function Bottom()
{
  return(
 
    <BottomTabNav.Navigator  
       initialRouteName="Dashboard" options={{headerShown: false}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === 'Dashboard') {
              return (<Icon name="home" size={24} style={{ color }} />);
            } else if (route.name === 'Projects') {
              return <Icon name="sliders" size={24} style={{ color }} />;
            } 
            else if (route.name === 'Service') {
                return <Icon name="newspaper-o" size={24} style={{ color }} />;
              }  
          },
          tabBarLabel: ({ focused, color }) => {
            let label;
            switch (route.name) {
              case 'Dashboard':
                return label = focused ? <Text style={{ color,fontSize:14 }}>Dashboard</Text> : null
              case 'Projects':
                return label = focused ? <Text style={{ color,fontSize:14 }}>Projects</Text> : null
              case 'Service':
                return label = focused ? <Text style={{ color,fontSize:14 }}>Service Requests</Text> : null

            }
            return label
          }
        })}
      
  
        tabBarOptions={{ activeTintColor: '#082341', inactiveTintColor: 'gray',showLabel:true,headerShown:false }}
      >
        
      <BottomTabNav.Screen options={{headerShown: false}} name='Dashboard' component={Dashboard} />
      <BottomTabNav.Screen options={{headerShown: false}} name='Projects' component={Projects} />
      <BottomTabNav.Screen options={{headerShown: false}} name='Service' component={Servicetab} />
      
    
    </BottomTabNav.Navigator>
  )
}


function AuditorBottom()
{
  return(
 
    <BottomTabNav.Navigator  
       initialRouteName="AuditorDashboard" options={{headerShown: false}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === 'AuditorDashboard') {
              return (<Icon name="home" size={24} style={{ color }} />);
            } else if (route.name === 'AuditorProjects') {
              return <Icon name="sliders" size={24} style={{ color }} />;
            } 
            else if (route.name === 'MyAccount') {
                return <Icon name="user" size={24} style={{ color }} />;
              }  
          },
          tabBarLabel: ({ focused, color }) => {
            let label;
            switch (route.name) {
              case 'AuditorDashboard':
                return label = focused ? <Text style={{ color,fontSize:14 }}>Dashboard</Text> : null
              case 'AuditorProjects':
                return label = focused ? <Text style={{ color,fontSize:14 }}>Projects</Text> : null
              case 'MyAccount':
                return label = focused ? <Text style={{ color,fontSize:14 }}>My Account</Text> : null

            }
            return label
          }
        })}
      
  
        tabBarOptions={{ activeTintColor: '#082341', inactiveTintColor: 'gray',showLabel:true,headerShown:false }}
      >
        
      <BottomTabNav.Screen options={{headerShown: false}} name='AuditorDashboard' component={AuditorDashboard} />
      <BottomTabNav.Screen options={{headerShown: false}} name='AuditorProjects' component={AuditorProjects} />
      <BottomTabNav.Screen options={{headerShown: false}} name='MyAccount' component={MyAccount} />
      
    
    </BottomTabNav.Navigator>
  )
}



class Routes extends React.Component {
    render() 
    {
        
 
        return(
        
            <NavigationContainer >
            
                <Stack.Navigator initialRouteName={Home} screenOptions={{ headerShown: false,}}>
                  <>
                      <Stack.Screen name="Login"  component={Login} /> 
                      <Stack.Screen name="Register" component={Register} />  
                      <Stack.Screen  name="Home" options={{headerShown: false}} component={Bottom} /> 
                      <Stack.Screen  name="Allprojects" options={{headerShown: false}} component={MyTabs} /> 
                      <Stack.Screen name="MyAccount" component={MyAccount} />  
                      <Stack.Screen name="AuditorAll" component={AuditorTab} /> 
                      <Stack.Screen name="AuditorWindow" component={AuditorWindow} />  
                      <Stack.Screen name="Window" component={Window} />  
                      <Stack.Screen name="Matched" component={Matched} />  
                      <Stack.Screen name="ServiceInner" component={ServiceInner} />
                      <Stack.Screen name="WindowService" component={WindowService} />
                      <Stack.Screen name="ServiceInnerClosed" component={ServiceInnerClosed} />
                      <Stack.Screen name="AuditorDashboard" component={AuditorDashboard} />
                      <Stack.Screen name="Auditor" component={AuditorBottom} />
                  </> 
                </Stack.Navigator>
            
            </NavigationContainer>
           
        )
    }
}

export default Routes;