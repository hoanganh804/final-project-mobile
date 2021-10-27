import React from 'react';
import { Button, SafeAreaView, Text, View ,TouchableOpacity, StyleSheet ,Image} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

HeaderProfile.propTypes = {
    
};

function HeaderProfile(props) {
    const {user,post,currentId} = props;
    
    return (
        <>
            <View style={styles.containertop}>
                <TouchableOpacity style={styles.containerleft} >
                <Text style={styles.text} >{user.displayName}</Text>
                <AntDesign style={styles.icondown} name="down" size={16} color="white" />
                </TouchableOpacity>
                <View style={styles.containerright}>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../../res/images/add.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../../res/images/list3.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerbody}>
                <View style={styles.boder}>
                    <Image style={styles.img} source={{uri:user.avatar_url}} />
                </View>
                <View style={styles.arrowcount}>
                    <Text style={styles.count}>0</Text>
                    <Text style={styles.typecount}>Posts</Text>
                </View>
                <View style={styles.arrowcount}>
                    <Text style={styles.count}>0</Text>
                    <Text style={styles.typecount}>Posts</Text>
                </View>
                <View style={styles.arrowcount}>
                    <Text style={styles.count}>0</Text>
                    <Text style={styles.typecount}>Posts</Text>
                </View>
            </View>
            <View style={styles.bodytext}>
                <Text style={styles.bodytextTitle}>UserName</Text>
                <Text style={styles.bodytextDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt #hashtag</Text>
                <TouchableOpacity >
                    <Text style={styles.bodytextLink}>Link goes here</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    containertop: {
        margin:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    containerbody:{
        marginLeft:15,
        marginRight:15,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },  
    containerleft: {
        flexDirection:'row',
       
    },
    containerright:{
        flexDirection:'row',
    
    },
    bodytext:{
       margin:15,
    }
    ,icon:{
        width:25,
        height:25,
        marginLeft:40,
    }
    ,text:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    icondown:{
        position:'relative',
        top:8
    }
    ,img:{
        height:100,
        width:100,
        borderRadius:50,
    }
    ,boder:{
        height:110,
        width:110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius:110/2,
    }
    ,arrowcount:{

    },
    count:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
    },  
    typecount:{
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        fontSize:15,
    },
    bodytextTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
    },
    bodytextDetails:{
        color:'white',
        fontSize:14,

    },
    bodytextLink:{
        color:'#03d7fc',
        marginTop:5,
    }
})


export default HeaderProfile;