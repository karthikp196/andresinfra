import React , {Component} from 'react';
import {Text , View, Image, StatusBar,ScrollView} from 'react-native';
import { Button,TextInput, DefaultTheme,Divider  } from 'react-native-paper';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Window extends Component {
  
  render()
  {
    const navigatehome = () =>
    {
        this.props.navigation.navigate('Matched');
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
                <Text style={tw`text-2xl font-bold text-center tracking-wide`}>Window Details</Text>
            </View>
       

            {/* End of Detailing */}
            <View>
                <View style={tw`p-4 m-2 items-center justify-center`}>
                    <Image style={styles.imagestyle} source={require('../assets/images/window.png')}   />
                    <Button style={tw` m-3 `} color="#2f5597"  icon="barcode-scan" mode="contained" onPress={navigatehome}>Scan To Complete</Button>
                </View>

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold `}>Order #</Text>
                    </View>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>RTO2021001</Text>
                    </View>
                </View>

                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>DATE</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>28/08/2021</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>PROJECT NAME</Text>
                    </View>
                    <View style={tw` m-auto flex-1 text-left`}>
                        <Text style={tw` text-base text-gray-700 font-semibold flex-auto text-left`}>Green Park</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1  text-right`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>PROJECT SITE</Text>
                    </View>
                    <View style={tw` m-auto flex-1 text-left `}>
                        <Text style={tw` text-base text-gray-700 font-semibold flex-auto text-left`}>Avula Residence, Kukatpally</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>WCS#</Text>
                    </View>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Ra2021001</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>SURVEYOR</Text>
                    </View>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Pradeep</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>TYPE</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>SW</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1`}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>BLOCK</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>1</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>UNIT #</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>101</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>LOCATION</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Hall/1</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>W-ID</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Ra2021001SW1101Hall/1</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>DESCRIPTION</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>90 Series, 2.5 Track 2 Panel Sliding Window with Mesh Shutter (5mm Plain Glass) </Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>WIDTH</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>1530</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>HEIGHT</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>450</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>APERTURE</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Plastered</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>GRILL</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Inside Grill</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>OFFSET</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Middle</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>MECHANICAL JOINT</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>No</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>PROFILE COLOUR</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>white</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>O/F PROFILE</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Outer frame S90</Text>
                    </View>
                </View>
                <Divider />

                <View style={tw`p-4 m-auto flex flex-row justify-center items-center text-center`}>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>Notes</Text>
                    </View>
                    <View style={tw` m-auto flex-1 `}>
                        <Text style={tw` text-base text-gray-700 font-semibold  flex-auto`}>No</Text>
                    </View>
                </View>
                <Divider />


            </View>

            
        </ScrollView> 
      </View>
    )
  }
}

const styles = 
{
  
   
  
}

export default Window;