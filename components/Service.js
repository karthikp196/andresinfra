import React , {Component} from 'react';
import {Text , View, Image, StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import { Button,TextInput, DefaultTheme,Divider  } from 'react-native-paper';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ServiceInner from './ServiceInner';

class Service extends Component {
  
  render()
  {
    const ServiceInner = () =>
    {
        this.props.navigation.navigate('ServiceInner');
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
            
        <TouchableOpacity onPress={ServiceInner}>
            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold`}>SR 2021003</Text>
                    </View>
                    <View style={tw`flex-auto `}>
                        <Text style={tw`text-base m-2 rounded-sm font-semibold text-center`}>26-Sep-2021</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>Green Park</Text>    
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md `}>
                        <Text style={tw`text-base  text-gray-500 font-semibold `}> <Icon  name="map-marker-radius" size={21} />No 5, SR Nagar, Hyderabad</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-left`}>  <Icon  name="card-text-outline" size={21} /> Locks where Broken unable to lock window, it leading to water leakage</Text>    
                    </View>
                </View>
            </View>
        </TouchableOpacity>
            {/* End of card */}

            <TouchableOpacity onPress={ServiceInner}>
            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold`}>SR 2021003</Text>
                    </View>
                    <View style={tw`flex-auto `}>
                        <Text style={tw`text-base m-2 rounded-sm font-semibold text-center`}>26-Sep-2021</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>Green Park</Text>    
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md `}>
                        <Text style={tw`text-base  text-gray-500 font-semibold `}> <Icon  name="map-marker-radius" size={21} />No 5, SR Nagar, Hyderabad</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-left`}>  <Icon  name="card-text-outline" size={21} /> Locks where Broken unable to lock window, it leading to water leakage</Text>    
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            {/* End of card */}

            <TouchableOpacity onPress={ServiceInner}>
            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold`}>SR 2021003</Text>
                    </View>
                    <View style={tw`flex-auto `}>
                        <Text style={tw`text-base m-2 rounded-sm font-semibold text-center`}>26-Sep-2021</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>Green Park</Text>    
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md `}>
                        <Text style={tw`text-base  text-gray-500 font-semibold `}> <Icon  name="map-marker-radius" size={21} />No 5, SR Nagar, Hyderabad</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-left`}>  <Icon  name="card-text-outline" size={21} /> Locks where Broken unable to lock window, it leading to water leakage</Text>    
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            {/* End of card */}

            <TouchableOpacity onPress={ServiceInner}>
            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold`}>SR 2021003</Text>
                    </View>
                    <View style={tw`flex-auto `}>
                        <Text style={tw`text-base m-2 rounded-sm font-semibold text-center`}>26-Sep-2021</Text>
                    </View>
                </View>
                <Divider />
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-center`}>Green Park</Text>    
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md `}>
                        <Text style={tw`text-base  text-gray-500 font-semibold `}> <Icon  name="map-marker-radius" size={21} />No 5, SR Nagar, Hyderabad</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-base text-center text-gray-500 font-semibold  text-left`}>  <Icon  name="card-text-outline" size={21} /> Locks where Broken unable to lock window, it leading to water leakage</Text>    
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

export default Service;
