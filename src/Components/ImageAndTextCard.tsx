import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IPersonalDetails {
    nameOfPerson?:string;
    cnicNumber?:string;
    imagePath?:string
  }

const ImageAndTextCard = ({ nameOfPerson, cnicNumber, imagePath }: IPersonalDetails) => {

    const base64Image = `data:image/png;base64,${imagePath}`;
    return (
        <View style={styles.container}>
            <View style={styles.profileImage}>
                <Image
                        source={{ uri: base64Image }}
                        style={{ width: 70, height: 70, borderRadius: 35 }}
                    />
            </View>
            <View>
                <Text style={{ fontSize: 18, color: 'black' }}>{nameOfPerson}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image
                        style={{ height: 20, width: 20, }}
                        source={require('../Assets/Icons/visiting-card.png')}
                    />
                    <Text style={{ fontSize: 15, color: 'green', marginLeft: 10 }}>{cnicNumber}</Text>
                </View>
            </View>
        </View>
    )
}

export default ImageAndTextCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    profileImage: {
        height: 90,
        width: 90,
        borderRadius: 45,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})