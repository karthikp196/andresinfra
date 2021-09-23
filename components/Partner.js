import React , {Component} from 'react';
import {Text , View, Image, StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import { Button,TextInput, DefaultTheme,Divider  } from 'react-native-paper';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Partner extends Component {
  
  render()
  {
    const navigatepartner = () =>
    {
        this.props.navigation.navigate('WindowService');
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
                <Text style={tw`text-2xl font-bold text-center tracking-wide`}>Raintree Park</Text>
            </View>
       

            {/* End of Detailing */}

            <TouchableOpacity onPress={navigatepartner}>          
            <View style={tw`bg-white shadow-lg m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-base text-gray-800 m-2 font-semibold`}>60 Series, 2.5 Track 2 Panel Sliding Window with Mesh Shutter (5mm Plain Glass) </Text>
                    </View>
                    <View style={tw`flex`}>
                        <Text style={tw`text-base m-1 rounded-sm font-semibold text-center`}>  <Icon  name="calendar-today" size={18}  /> 05-09-2021</Text>
                        <Text style={tw`text-sm bg-green-500 text-white  rounded-sm font-semibold text-center p-1`}> <Icon  name="sticker-check" size={12}  /> Completed</Text>
                    </View>
                </View>
                
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-700 font-semibold text-center`}>TYPE</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>BLOCK</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>UNIT</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row mb-3`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold text-center`}>SW</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>A</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>101</Text>
                    </View>
                </View>
                {/* Table 2 */}

                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-700 font-semibold text-center`}>LOCATION</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>WIDTH</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>WEIGHT</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row mb-3`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold text-center`}>BR/1</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>1200MM</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>800</Text>
                    </View>
                </View>

            </View>
            </TouchableOpacity>
            {/* End of card */}

            <TouchableOpacity onPress={navigatepartner}>         
            <View style={tw`bg-white shadow-lg m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-base text-gray-800 m-2 font-semibold`}>60 Series, Single Shutter Openable Window (5mm Plain Glass)  </Text>
                    </View>
                    <View style={tw`flex `}>
                    <Text style={tw`text-base m-1 rounded-sm font-semibold text-center`}>  <Icon  name="calendar-today" size={18}  /> 05-09-2021</Text>
                        <Text style={tw`text-sm bg-green-500 text-white  rounded-sm font-semibold text-center p-1`}> <Icon  name="sticker-check" size={12}  /> Completed</Text>
                    </View>
                </View>
                
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-700 font-semibold text-center`}>TYPE</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>BLOCK</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>UNIT</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row mb-3`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold text-center`}>CW1</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>1</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>101</Text>
                    </View>
                </View>
                {/* Table 2 */}

                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-700 font-semibold text-center`}>LOCATION</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>WIDTH</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>WEIGHT</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row mb-3`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold text-center`}>HALL/3</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>1200MM</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>800</Text>
                    </View>
                </View>

            </View>
            </TouchableOpacity>
            {/* End of card */}

            <TouchableOpacity onPress={navigatepartner}> 
            <View style={tw`bg-white shadow-lg m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-base text-gray-800 m-2 font-semibold`}>I-39, Fixed Louvers with Exhaust Fan Provision (4mm Pinhead Glass)  </Text>
                    </View>
                    <View style={tw`flex `}>
                    <Text style={tw`text-base m-1 rounded-sm font-semibold text-center`}>  <Icon  name="calendar-today" size={18}  /> 05-09-2021</Text>
                        <Text style={tw`text-sm bg-green-500 text-white  rounded-sm font-semibold text-center p-1`}> <Icon  name="sticker-check" size={12}  /> Completed</Text>
                    </View>
                </View>
                
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-700 font-semibold text-center`}>TYPE</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>BLOCK</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>UNIT</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row mb-3`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold text-center`}>V</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>1</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>101</Text>
                    </View>
                </View>
                {/* Table 2 */}

                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-700 font-semibold text-center`}>LOCATION</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>WIDTH</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-700 font-semibold  text-center`}>WEIGHT</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row mb-3`}>
                    <View style={tw`flex-auto`}>   
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold text-center`}>HALL/3</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>1298MM</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>613MM</Text>
                    </View>
                </View>

            </View>
            </TouchableOpacity>
            {/* End of card */}
            

            
        </ScrollView> 
      </View>
    )
  }
}

const styles = 
{
  
   
  
}

export default Partner;