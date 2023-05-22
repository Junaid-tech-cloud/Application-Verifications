import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppTopTabs from './AppTopTabs'

const TopTabs = () => {
    const [tabSelected, setTabSelected] = useState<string>('')

    function DirectorsMessage() {
        return (
            <Text>TEST tabs</Text>
        )
    }
    function AboutUs() {
        return (
            <Text>Test tab 2</Text>
        )

    }


    return (
        <View>
            <AppTopTabs
                firstTabC={() => AboutUs()}
                firstTabT={'about_us'}
                secondTabC={() => DirectorsMessage()}
                secondTabT={'directors_message'}
                tabStyle={{
                    tabBar: {
                        backgroundColor: 'white',
                        paddingHorizontal: 15,
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,

                    },
                    tabBtn: {},
                    tabTextActive: {
                        fontSize: 1,
                        color: 'black',
                        borderBottomWidth: 2,
                        borderColor: 'black',
                        paddingBottom: 1,
                    },
                    tabTextUnActive: {
                        fontSize: 1,
                        color: 'grey',
                    }
                }}
                setTabSelected={setTabSelected}
                initialRouteName={'ForIndividuals'}
            />
        </View>
    )
}

export default TopTabs

const styles = StyleSheet.create({})