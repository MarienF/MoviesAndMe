import React from 'react'
import {View, Button, TextInput, StyleSheet} from "react-native";

class Search extends React.Component {
    render(){
        return(
            <View style={styles.view}>
                <TextInput style={styles.textinput} placeholder="Titre du film"/>
                <Button title="Rechercher" onPress={() => {}}/>
                <View style={{ height: 50, backgroundColor: 'red' }}></View>
                <View style={{ height: 50, backgroundColor: 'green' }}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        marginTop: 50,
        flex: 1,
        alignItems: 'stretch'
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search