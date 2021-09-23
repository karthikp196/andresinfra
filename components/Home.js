import React , {Component} from 'react';
import {Text , View,ScrollView,Linking, PermissionsAndroid,TouchableOpacity,StatusBar} from 'react-native';
import {TextInput, Button,Avatar, Card, Subheading, IconButton,Divider,Title, Checkbox, Paragraph, Modal, Portal,Provider,RadioButton  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class Home extends Component {
  state = {modalvisible:false,modalhide:false ,area:'',city:'',label:'' }


  render()
  {

    
    
    return(
      <View>
          <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <ScrollView>
                <View style={styles.parentcrd}>
                    <View style={styles.childcrd}>
                
                        <Subheading> <Icon color="#2f5597" name="hammer-screwdriver" size={21} /> Project 1</Subheading>
                        <Paragraph> <Icon color="#2f5597" name="map-marker-radius" size={21} /> No 5, Msr swimming Pool ,Banaswadi,Bengaluru, 560043</Paragraph>
                    </View>
                    <View style={styles.childcrd1}>
                        <Button color="#2f5597" icon="eye" mode="contained" >
                            View 
                        </Button>
                    </View>
                </View>

                <View style={styles.parentcrd}>
                    <View style={styles.childcrd}>
                
                        <Subheading> <Icon color="#2f5597" name="hammer-screwdriver" size={21} /> Project 1</Subheading>
                        <Paragraph> <Icon color="#2f5597" name="map-marker-radius" size={21} /> No 5, Msr swimming Pool ,Banaswadi,Bengaluru, 560043</Paragraph>
                    </View>
                    <View style={styles.childcrd1}>
                        <Button color="#2f5597" icon="eye" mode="contained" >
                            View 
                        </Button>
                    </View>
                </View>

                <View style={styles.parentcrd}>
                    <View style={styles.childcrd}>
                
                        <Subheading> <Icon color="#2f5597" name="hammer-screwdriver" size={21} /> Project 1</Subheading>
                        <Paragraph> <Icon color="#2f5597" name="map-marker-radius" size={21} /> No 5, Msr swimming Pool ,Banaswadi,Bengaluru, 560043</Paragraph>
                    </View>
                    <View style={styles.childcrd1}>
                        <Button color="#2f5597" icon="eye" mode="contained" >
                            View 
                        </Button>
                    </View>
                </View>

                <View style={styles.parentcrd}>
                    <View style={styles.childcrd}>
                
                        <Subheading> <Icon color="#2f5597" name="hammer-screwdriver" size={21} /> Project 1</Subheading>
                        <Paragraph> <Icon color="#2f5597" name="map-marker-radius" size={21} /> No 5, Msr swimming Pool ,Banaswadi,Bengaluru, 560043</Paragraph>
                    </View>
                    <View style={styles.childcrd1}>
                        <Button color="#2f5597" icon="eye" mode="contained" >
                            View 
                        </Button>
                    </View>
                </View>

                <View style={styles.parentcrd}>
                    <View style={styles.childcrd}>
                
                        <Subheading> <Icon color="#2f5597" name="hammer-screwdriver" size={21} /> Project 1</Subheading>
                        <Paragraph> <Icon color="#2f5597" name="map-marker-radius" size={21} /> No 5, Msr swimming Pool ,Banaswadi,Bengaluru, 560043</Paragraph>
                    </View>
                    <View style={styles.childcrd1}>
                        <Button color="#2f5597" icon="eye" mode="contained" >
                            View 
                        </Button>
                    </View>
                </View>

                <View style={styles.parentcrd}>
                    <View style={styles.childcrd}>
                
                        <Subheading> <Icon color="#2f5597" name="hammer-screwdriver" size={21} /> Project 1</Subheading>
                        <Paragraph> <Icon color="#2f5597" name="map-marker-radius" size={21} /> No 5, Msr swimming Pool ,Banaswadi,Bengaluru, 560043</Paragraph>
                    </View>
                    <View style={styles.childcrd1}>
                        <Button color="#2f5597" icon="eye" mode="contained" >
                            View 
                        </Button>
                    </View>
                </View>

                <View style={styles.parentcrd}>
                    <View style={styles.childcrd}>
                
                        <Subheading> <Icon color="#2f5597" name="hammer-screwdriver" size={21} /> Project 1</Subheading>
                        <Paragraph> <Icon color="#2f5597" name="map-marker-radius" size={21} /> No 5, Msr swimming Pool ,Banaswadi,Bengaluru, 560043</Paragraph>
                    </View>
                    <View style={styles.childcrd1}>
                        <Button color="#2f5597" icon="eye" mode="contained" >
                            View 
                        </Button>
                    </View>
                </View>

                
            </ScrollView>
      </View>

      
    )
  }
}


const styles = 
{
    parentcrd: {
        flexDirection:'row',
        margin:15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        padding:10
    },
  
    childcrd: {
        flex:2,
    },
    childcrd1: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}
export default Home;