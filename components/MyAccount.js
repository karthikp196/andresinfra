import React , {Component} from 'react';
import {Text , View, Image} from 'react-native';
import { Button,TextInput,List ,Divider } from 'react-native-paper';

class MyAccount extends Component {
  
  render()
  {
      const navigatehome = () =>{
        this.props.navigation.navigate('Login');
      }
    return(
      <View>
           <List.Item
                title="My Account"
                left={props => <List.Icon {...props} icon="account" />}
            />
            <Divider />
            <List.Item
                title="Recent Audits"
                left={props => <List.Icon {...props} icon="hammer-screwdriver" />}
            />
            <Divider />
           
            <View style={{margin:15}}>
                <Button  icon="lock" mode="outlined" onPress={navigatehome}>Logout</Button>  
            </View> 
      </View>
    )
  }
}

const styles = 
{
  
}

export default MyAccount;