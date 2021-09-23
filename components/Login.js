import React , {Component} from 'react';
import {Text , View, Image, StatusBar} from 'react-native';
import { Button,TextInput, DefaultTheme,  } from 'react-native-paper';
import { Input } from 'react-native-elements';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'red',
    },
  };

class Login extends Component {

    state = {email:'' ,password:''};
  
  render()
  {
    const navigatehome = () =>
    {
        var email = this.state.email;
        var password = this.state.password;
        if(email == 'installer@demo.com')
        {
            this.props.navigation.navigate('Home');
        }

        else if(email == 'auditor@demo.com')
        {
            
            this.props.navigation.navigate('Auditor');
        }
        else
        {
            alert('Invalid Credentials')
        }
       
    }

    const navigatereg = () =>
    {
        this.props.navigation.navigate('Register');
    }
    return(
      <View style={styles.parentview}>
             <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
        <View style={styles.imageview}>
            <Image style={styles.imagestyle} source={require('../assets/images/Picture1.png')}   />
        </View>
        <View style={styles.elementstyle}>

          
            <View style={styles.formview}>
                <View style={styles.child_form}>
                    <TextInput style={styles.txtinput} theme={{colors: {primary: '#2f5597'}}} underlineColor="#082341" onChangeText={(value) => this.setState({email: value})}  mode="outlined" label="Email" left={<TextInput.Icon name="email" />} />
                </View>

                <View style={styles.child_form}>
                    <TextInput style={styles.txtinput} theme={{colors: {primary: '#2f5597'}}} underlineColor="#082341" onChangeText={(value) => this.setState({password: value})}  mode="outlined" label="Password" secureTextEntry left={<TextInput.Icon name="lock" />} />
                </View>

                <View style={styles.child_form}>
                    <Button color="#2f5597"  icon="lock" mode="contained" onPress={navigatehome}>Login</Button>
                </View>

                <View style={styles.extratxt}>
                    <View style={styles.txtchild}>
                        <Text style={styles.extra_p}>Forgot Password ?</Text>
                    </View>
                   
                </View>

            </View>
        </View>
      </View>
    )
  }
}

const styles = 
{
    formview: {
        margin:5,
      
    },
    child_form: {
        margin:10,
    },
    imageview:
    {
        display:'flex',
        alignItems:'center',
        marginTop:150
       
    },
    txtinput:{
        backgroundColor:'white'
    },
    imagestyle: {
    width: '90%',
    height: undefined,
    aspectRatio: 3,
    resizeMode:'contain'
    },
    elementstyle:
    {
       
        height:'100%',
       
        padding:20,
        marginTop:50
    },
    parentview:
    {
       
        height:'100%'
    },
    extratxt: {
        flexDirection:'row',
        margin:10
    },
    txtchild: {
        flex:2,
    },
    txtchild1:{
        flex:2,
    },
    extra_p: {
        fontSize:16,
        fontWeight:'bold',
        color:'#2f5597'
    }
}

export default Login;