import React from 'react';
import { Button, SafeAreaView, Text, View ,TouchableOpacity, StyleSheet,Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

Story.propTypes = {
    
};

function Story(props) {
    const {post } = props;
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.boder}>
                    <Image style={styles.img} source={{uri:post.images[0]}} />
                </View>
                <Text style={styles.text}>Story 1</Text>
            </View>
            <View>
                <View style={styles.boder}>
                    <Image style={styles.img} source={{uri:post.images[0]}} />
                </View>
                <Text style={styles.text}>Story 2</Text>
            </View>
            <View>
                <View style={styles.boder}>
                    <Image style={styles.img} source={{uri:post.images[0]}} />
                </View>
                <Text style={styles.text}>Story 3</Text>
            </View>
            <View>
                <View style={styles.boder}>
                    <Image style={styles.img} source={{uri:post.images[0]}} />
                </View>
                <Text style={styles.text}>Story 4</Text>
            </View>
            <View>
                <View style={styles.boder1}>
                    <Ionicons name="add" size={45} color="white"/>
                </View>
                <Text style={styles.text}>New</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:15,
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    img:{
        height:60,
        width:60,
        borderRadius:30,
    },
    boder:{
        height:65,
        width:65,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:65/2,
    }
    ,boder1:{
        width:65,
        height:65,
        borderColor:'white',
        borderWidth:2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:60/2,
    }
    
    ,text:{
        color: 'white',
        textAlign:'center',
    }
})

export default Story;