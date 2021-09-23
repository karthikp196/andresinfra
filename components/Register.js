import React , {Component} from 'react';
import {Text , View, Image} from 'react-native';
import { Button,TextInput  } from 'react-native-paper';

class Register extends Component {
  
  render()
  {

    const navigatehome = () =>
    {
        this.props.navigation.navigate('Home');
    }

    const navigatelog = () =>
    {
        this.props.navigation.navigate('Login');
    }
    

    return(
      <View style={styles.parentview}>
        <View style={styles.imageview}>
           
        </View>
        <View style={styles.elementstyle}>

          
            <View style={styles.formview}>

                 <View style={styles.child_form}>
                    <TextInput style={styles.txtinput} underlineColor="#082341" mode="outlined" label="Name" left={<TextInput.Icon name="account" />} />
                </View>

                <View style={styles.child_form}>
                    <TextInput keyboardType={'numeric'} style={styles.txtinput} underlineColor="#082341" mode="outlined" label="Mobile No" left={<TextInput.Icon name="phone" />} />
                </View>

                

                <View style={styles.child_form}>
                    <TextInput style={styles.txtinput} underlineColor="#082341" mode="outlined" label="Email" left={<TextInput.Icon name="email" />} />
                </View>

                <View style={styles.child_form}>
                    <TextInput style={styles.txtinput} underlineColor="#082341" mode="outlined" label="Password" secureTextEntry left={<TextInput.Icon name="lock" />} />
                </View>

                <View style={styles.child_form}>
                    <TextInput style={styles.txtinput} underlineColor="#082341" mode="outlined" label="Confirm Password" secureTextEntry left={<TextInput.Icon name="lock" />} />
                </View>

                <View style={styles.child_form}>
                    <Button color="#082341" icon="check" mode="contained" onPress={navigatehome}>Register</Button>
                </View>

                <View style={styles.extratxt}>
                    <View style={styles.txtchild}>
                        <Text style={styles.extra_p} onPress={navigatelog}>Already Have an account ?</Text>
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
       
    },
    txtinput:{
        backgroundColor:'white'
    },
    imagestyle: {
    width: '90%',
    height: undefined,
    aspectRatio: 2,
    resizeMode:'contain'
    },
    elementstyle:
    {
        backgroundColor:'#fff',
        height:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:20,
       
    },
    parentview:
    {
        backgroundColor:'#082341',
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
        color:'#082341'
    }
}

export default Register;