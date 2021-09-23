import React , {Component} from 'react';
import {Text , View, Image, StatusBar,ScrollView} from 'react-native';
import { Button,TextInput, DefaultTheme,Divider  } from 'react-native-paper';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class AuditorDashboard extends Component {
  
  render()
  {
    const navigatehome = () =>
    {
        this.props.navigation.navigate('Home');
    }

    const navigatereg = () =>
    {
        this.props.navigation.navigate('Register');
    }
    return(
      <View style={tw`bg-gray-100 `}>
             <StatusBar
                backgroundColor="#f9fafb"
                barStyle="dark-content"
            />
         <ScrollView>
            <View style={tw`p-4 `}>
                <Text style={tw`text-2xl font-bold text-center tracking-wide`}>Auditor Dashboard</Text>
            </View>
       
            <View style={tw` m-3 p-1 rounded-md`}>
                <View  style={tw`flex  flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold `}>Audit Summary</Text>
                    </View>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-lg m-2 text-gray-800 font-semibold text-center`}>06-Sep-2021</Text>
                    </View>
                </View>

                <Divider />
               
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md w-20 h-44 bg-white m-2`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-blue-600`}>
                            <Text style={tw`text-3xl m-2  text-center`}>200</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>MTD Audited</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md w-20 h-44 bg-white m-2`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-green-500`}>
                            <Text style={tw`text-3xl m-2  text-center`}>50</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Outstanging</Text>
                    </View>
                </View>

                <View style={tw`flex flex-row`}>
                    <Text style={tw`text-xl m-2 text-gray-800 font-semibold text-center`}>Rejected Installations : 5</Text>
                </View>

            </View>

            {/* End of installation */}

         
        </ScrollView> 
      </View>
    )
  }
}

const styles = 
{
  
   
  
}

export default AuditorDashboard;