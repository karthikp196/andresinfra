import React , {Component} from 'react';
import {Text , View, Image, StatusBar,ScrollView,} from 'react-native';
import { Button,TextInput, DefaultTheme,Divider  } from 'react-native-paper';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ServiceInner extends Component {
  
  render()
  {
    const servicehome = () =>
    {
        this.props.navigation.navigate('Service');
    }

    const navigatereg = () =>
    {
        this.props.navigation.navigate('WindowService');
    }
    return(
      <View style={tw`bg-gray-100 `}>
             <StatusBar
                backgroundColor="#f9fafb"
                barStyle="dark-content"
            />
               <View style={tw`p-4 `}>
                <Text style={tw`text-2xl font-bold text-center tracking-wide`}>Service Request #01435</Text>
            </View>
       
         <ScrollView>
             <View  style={tw`m-2`}>
                <View style={tw`m-1`}>
                    <Text style={tw`text-base font-bold tracking-wide`}> SR01435</Text>
                </View>
                <View style={tw`m-1`}>
                    <Text style={tw`text-base font-bold tracking-wide`}> SR Date : 05-09-2021</Text>
                </View>
                <View style={tw`flex flex-row m-1`}>
                    <Text style={tw`text-base font-bold tracking-wide`}> W-ID : 015445</Text>
                    <View style={tw`ml-auto`}>
                        <Button  color="#2f5597" mode="contained"  onPress={navigatereg} >Fetch Details</Button>
                    </View>
                </View>
            </View>
            <Divider />

            <View style={tw`p-4 m-auto flex flex-row `}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-800 font-semibold `}>SR Description</Text>
                    </View>
                    <View style={tw` mr-2 pl-2 flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold `}> Locks where Broken unable to lock window, it leading to water leakage</Text>
                    </View>
            </View>
            <Divider />
            <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold `}>Customer Name</Text>
                    </View>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Ravi Kumar</Text>
                    </View>
            </View>
            <Divider />

            <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold `}>Phone</Text>
                    </View>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>123456789</Text>
                    </View>
            </View>
            <Divider />
            
            <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold `}>Andresinfra POC</Text>
                    </View>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Dilip</Text>
                    </View>
            </View>
            <Divider />

            
            <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold `}>Phone</Text>
                    </View>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>123456789</Text>
                    </View>
            </View>
            <Divider />


           
           <View style={tw`p-2 m-2 bg-white shadow-md`}>
                    <Text style={tw`text-lg text-gray-500 font-semibold`}>
                        Issue Resolution
                    </Text>
                    <Input
                        multiline={true}
                        numberOfLines={4}
                    />
                     <View style={tw` flex flex-row`}>  
                            <View style={tw`m-2 flex flex-row`}>
                                <Button color="#D83939" mode="contained" onPress={servicehome}>Cancel</Button>
                            </View>

                            <View style={tw`m-2 flex flex-row`}>
                                <Button color="#2f5597" mode="contained" onPress={servicehome}>Complete</Button>
                            </View>

                            <View style={tw` m-2 flex flex-row`}>
                                <Button color="#2f5597" mode="contained" onPress={servicehome}>Escalate</Button>
                            </View>
                    </View>
              
           </View>


          


        </ScrollView> 
      </View>
    )
  }
}

const styles = 
{
  
   
  
}

export default ServiceInner;