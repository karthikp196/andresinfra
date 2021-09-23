import React , {Component} from 'react';
import {Text , View, Image, StatusBar,ScrollView,} from 'react-native';
import { Button,TextInput, DefaultTheme,Divider  } from 'react-native-paper';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Matched extends Component {
  
  render()
  {
    const allproject = () =>
    {
        this.props.navigation.navigate('Allprojects');
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
            <View style={tw`p-4 m-2`}>
                <Text style={tw`text-lg font-bold text-center tracking-wide`}> <Icon color="#01A601" name="check-circle" size={26} />WINDOW SPECS MATCHED !</Text>
            </View>
            <Divider />
           
           <View style={tw`p-4 m-4 bg-white shadow-md`}>
               <Text style={tw`text-lg text-center text-gray-500 font-semibold`}>
                   Click and Upload Picture of Installed Window
               </Text>
               <Divider />
               <Input 
               placeholder="Choose File"
               theme={{colors: {primary: '#2f5597'}}} underlineColor="#082341" mode="outlined" 
                leftIcon={
                    <Icon
                      name='file' 
                      size={24}
                      color='black'
                    />
                  }
               />
           </View>

           <View style={tw`p-4 m-4 bg-white shadow-md`}>
                <Text style={tw`text-lg text-gray-500 font-semibold`}>
                        Comments
                    </Text>
                    <Input
                        multiline={true}
                        numberOfLines={4}
                    />
           </View>

           <View style={tw`p-4 m-4 flex flex-row`}>
                <View style={tw`m-2 flex flex-row`}>
                    <Button color="#D83939" mode="contained" onPress={allproject}>Cancel</Button>
                </View>

                <View style={tw` m-2 flex flex-row`}>
                    <Button color="#2f5597" mode="contained" onPress={allproject}>Complete Installation</Button>
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

export default Matched;