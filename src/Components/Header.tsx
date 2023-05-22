import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: 'green', fontSize: 25, fontWeight: 'bold' }}>GrowTech</Text>
                <Text style={{ color: 'black', fontSize: 13 }}>Application Verifications</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>

                <View style={styles.imageContainer}>
                    <Image
                        style={{ height: '100%', width: '100%' }}
                        source={require('../Assets/Icons/notification.png')}
                    />
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={{ height: '100%', width: '100%' }}
                        source={require('../Assets/Icons/menu-button-three-horizontal-lines-260nw-785528545.webp')}
                    />
                </View>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    imageContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginRight: 10,
    }
})