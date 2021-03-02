import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class filmItem extends React.Component {
    render() {
        const film = this.props.film
        return (
            <View style={styles.main_container}>
                <Image style={styles.image_film} source={{uri: 'https://lumiere-a.akamaihd.net/v1/images/image_a89e70e8.jpeg?region=0%2C0%2C540%2C810'}}/>
                <View style={styles.text_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text} numberIfLines={6}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>{film.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>{film.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flex: 1,
        flexDirection: 'row',
    },
    image_film: {
        margin: 5,
        width: 120,
        height: 180,
        backgroundColor: 'blue'
    },
    header_container: {
        backgroundColor: 'orange',
        flex: 3,
        flexDirection: 'row'
    },
    text_container: {
        margin: 5,
        backgroundColor: 'green',
        flex: 1
    },
    title_text: {
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        flex: 1,
        flexWrap: 'wrap'
    },
    vote_text: {
    },
    description_container: {
        flex: 7,
        backgroundColor: 'red'
    },
    description_text: {
        fontStyle: 'italic'
    },
    date_container: {
        flex: 1,
        backgroundColor: 'purple'
    },
    date_text: {
    }
})

export default filmItem