import React , {Component} from 'react';
import {Text , View, Image, StatusBar,ScrollView} from 'react-native';
import { Button,TextInput, DefaultTheme,Divider  } from 'react-native-paper';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Dashboard extends Component {
  
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
                <Text style={tw`text-2xl font-bold text-center tracking-wide`}>Dashboard</Text>
            </View>
       
            <View style={tw` m-3 p-1 rounded-md`}>
                <View  style={tw`flex  flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-xl text-gray-800 m-2 font-semibold `}>Installations</Text>
                    </View>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-lg m-2 text-gray-800 font-semibold text-center`}>06-Sep-2021</Text>
                    </View>
                </View>

                <Divider />
               
                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md w-20 h-44 bg-white m-2`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-blue-600`}>
                            <Text style={tw`text-3xl m-2  text-center`}>6</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>MTD Target</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md w-20 h-44 bg-white m-2`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-green-500`}>
                            <Text style={tw`text-3xl m-2  text-center`}>3</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Completed</Text>
                    </View>
                </View>

                <View style={tw`flex flex-row`}>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md w-20 h-44 bg-white m-2`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-red-400`}>
                            <Text style={tw`text-3xl m-2  text-center`}>20</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Outstanding Today</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md w-20 h-44 bg-white m-2`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-yellow-300`}>
                            <Text style={tw`text-3xl m-2  text-center`}>300</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Expected Monthly</Text>
                    </View>
                </View>

            </View>

            {/* End of installation */}

            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-lg text-gray-800 m-2 font-semibold`}>Orders</Text>
                    </View>
                   
                </View>

                <Divider />
               
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto items-center`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-blue-600`}>
                            <Text style={tw`text-3xl m-2  text-center`}>50</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>New</Text>
                    </View>
                    <View style={tw`flex-auto items-center`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-red-400`}>
                            <Text style={tw`text-3xl m-2  text-center`}>70</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Total Outstanding</Text>
                    </View>
                </View>
            </View>
            {/* End of orders */}

            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-lg text-gray-800 m-2 font-semibold`}>Service Requests</Text>
                    </View>
                   
                </View>

                <Divider />
               
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto items-center`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-blue-600`}>
                            <Text style={tw`text-3xl m-2  text-center`}>3</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Outstanding</Text>
                    </View>
                    <View style={tw`flex-auto items-center`}>
                        <View style={tw`rounded-full justify-center  w-20 h-20 m-2  border-4 border-red-400`}>
                            <Text style={tw`text-3xl m-2  text-center`}>10</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Closed </Text>
                    </View>
                </View>
            </View>

            {/* End of service request */}
            <View style={tw`bg-white shadow-md m-3 p-1 rounded-md`}>
                <View  style={tw`flex flex-row`}>
                    <View style={tw`flex-auto`}>
                        <Text style={tw`text-lg text-gray-800 m-2 font-semibold`}><Icon  name="currency-inr" size={22} /> Sales </Text>
                    </View>
                   
                </View>

                <Divider />
               
                <View style={tw`flex flex-row m-2`}>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md bg-white m-2`}>
                        <View style={tw``}>
                            <Text style={tw`text-2xl m-2  text-center`}>20,000</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Total Sales</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md bg-white m-2`}>
                        <View style={tw``}>
                            <Text style={tw`text-2xl m-2  text-center`}>10,000</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Paid</Text>
                    </View>
                    <View style={tw`flex-auto items-center justify-center rounded-md shadow-md bg-white m-2`}>
                        <View style={tw``}>
                            <Text style={tw`text-2xl m-2  text-center`}> 2000</Text>
                        </View>
                       
                        <Text style={tw`text-base m-2 text-center text-gray-500 font-semibold  text-center`}>Payment Due</Text>
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

export default Dashboard;