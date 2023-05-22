import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IPersonalDetails {
    gender?: string;
    maritalStatus?: string;
    parentAge?: string;
    mobileNumber?: string;
    dateOfBirth?: string;
    education?: string;
}

const personalDetails = ({ gender, maritalStatus, parentAge, mobileNumber, dateOfBirth, education }: IPersonalDetails) => {

    const inputDate: any = dateOfBirth;
    const date: Date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate: any = date.toLocaleDateString("en-US", options).split(' ')

    return (
        <View>
            <View style={[styles.container]}>

                <View style= {{width: '33%',}}>
                    <View>
                        <Image
                            style={{ height: 30, width: 30, }}
                            source={require('../Assets/Icons/gender.png')}
                        />

                    </View>
                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{gender}</Text>
                        <Text style={{ fontSize: 13, color: 'black' }}>Gender</Text>
                    </View>
                </View>

                <View style= {{width: '33%', }}>
                    <View>
                        <Image
                            style={{  height: 30, width: 30, }}
                            source={require('../Assets/Icons/rings.png')}
                        />

                    </View>
                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{maritalStatus}</Text>
                        <Text style={{ fontSize: 13, color: 'black' }}>Maritial</Text>
                    </View>
                </View>

                <View style= {{width: '33%', }}>
                    <View>
                        <Image
                            style={{  height: 30, width: 30,  }}
                            source={require('../Assets/Icons/children.png')}
                        />

                    </View>
                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{parentAge}</Text>
                        <Text style={{ fontSize: 13, color: 'black' }}>{`Percentage(${parentAge})`}</Text>
                    </View>
                </View>
            </View>

            <View style={[styles.container]}>

            <View style= {{width: '33%', }}>
                    <View>
                        <Image
                            style={{  height: 30, width: 30, }}
                            source={require('../Assets/Icons/telephone.png')}
                        />

                    </View>
                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{mobileNumber}</Text>
                        <Text style={{ fontSize: 13, color: 'black' }}>Mobile</Text>
                    </View>
                </View>

                <View style= {{width: '33%', }}>
                    <View>
                        <Image
                            style={{  height: 30, width: 30, }}
                            source={require('../Assets/Icons/calendar.png')}
                        />

                    </View>
                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{`${formattedDate[1].replace(",", '')}-${formattedDate[0]}-${formattedDate[2]}`}</Text>
                        <Text style={{ fontSize: 13, color: 'black' }}>Date of birth</Text>
                    </View>
                </View>

                <View style= {{width: '33%', }}>
                    <View>
                        <Image
                            style={{  height: 30, width: 30, }}
                            source={require('../Assets/Icons/boy.png')}
                        />

                    </View>
                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{education}</Text>
                        <Text style={{ fontSize: 13, color: 'black' }}>Education</Text>
                    </View>
                </View>
            </View>


        </View>
    )
}

export default personalDetails

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    }
})