import React , {Component} from 'react';
import {Text , View, Image, StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import { Button,TextInput, DefaultTheme,Divider  } from 'react-native-paper';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class AuditorProjects extends Component {
  
  render()
  {
    const navigatepartner = () =>
    {
        this.props.navigation.navigate('AuditorAll');
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
                <Text style={tw`text-2xl font-bold text-center tracking-wide`}>Projects</Text>
            </View>
       
            <TouchableOpacity onPress={navigatepartner}>
                <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                    <View  style={tw`flex flex-row`}>
                        <View style={tw`flex-auto`}>
                            <Text style={tw`text-xl text-gray-800 m-2 font-semibold`}>Raintree Park</Text>
                        </View>
                        <View style={tw`flex-auto `}>
                            <Text style={tw`text-base m-2 bg-yellow-500 text-white rounded-sm font-semibold text-center`}>On Going</Text>
                        </View>
                    </View>
                    <Divider />
                    <View style={tw`flex flex-row`}>
                        <View style={tw`flex-auto`}>
                        
                            <Text style={tw`text-base m-2  text-gray-500 font-semibold `}> <Icon  name="map-marker-radius" size={21} />No 5, SR Nagar, Hyderabad</Text>
                        </View>
                        <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                            <View style={tw`rounded-full justify-center  w-10 h-10 m-2  border-2 border-red-400`}>
                                <Text style={tw`text-base m-2  text-center`}>30</Text>
                            </View>
                            <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>Outstanding Today</Text>
    
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* End of card */}

            <TouchableOpacity onPress={navigatepartner}>
            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold`}>Nirmiti Capital</Text>
                    </View>
                    <View style={tw`flex-auto `}>
                        <Text style={tw`text-base m-2 bg-yellow-500 text-white rounded-sm font-semibold text-center`}>On Going</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                       
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold `}> <Icon  name="map-marker-radius" size={21} />No 5, SR Nagar, Hyderabad</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <View style={tw`rounded-full justify-center  w-10 h-10 m-2  border-2 border-red-400`}>
                            <Text style={tw`text-base m-2  text-center`}>6</Text>
                        </View>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>Outstanding Today</Text>
 
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            {/* End of card */}

            <TouchableOpacity onPress={navigatepartner}>
            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold`}>Green Park</Text>
                    </View>
                    <View style={tw`flex-auto `}>
                        <Text style={tw`text-base m-2 bg-red-500 text-white rounded-sm font-semibold text-center`}>Delayed</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                       
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold `}> <Icon  name="map-marker-radius" size={21} />No 5, SR Nagar, Hyderabad</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <View style={tw`rounded-full justify-center  w-10 h-10 m-2  border-2 border-red-400`}>
                            <Text style={tw`text-base m-2  text-center`}>4</Text>
                        </View>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>Outstanding Today</Text>
 
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            {/* End of card */}

            <TouchableOpacity onPress={navigatepartner}>
            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold`}>Raintree Park</Text>
                    </View>
                    <View style={tw`flex-auto `}>
                        <Text style={tw`text-base m-2 bg-green-500 text-white rounded-sm font-semibold text-center`}>Completed</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                       
                        <Text style={tw`text-base m-2  text-gray-500 font-semibold `}> <Icon  name="map-marker-radius" size={21} />No 5, SR Nagar, Hyderabad</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md  m-2`}>
                        <View style={tw`rounded-full justify-center  w-10 h-10 m-2  border-2 border-red-400`}>
                            <Text style={tw`text-base m-2  text-center`}>0</Text>
                        </View>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>Outstanding Today</Text>
 
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

export default AuditorProjects;
