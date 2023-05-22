import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuestionAnswerCards = ({ data, headerTitle, paymentStatus }: any) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: 'white', paddingLeft: 10, fontSize: 15, fontWeight: 'bold' }}>{headerTitle}</Text>
            </View>
            <View>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                    <>
                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, marginHorizontal: 5, paddingVertical: 5, paddingHorizontal: 5 }}>
                        <Text style={{ color: 'grey' }}>{item?.fieldName}</Text>
                        <Text style={{ color: 'black' }}>{item?.fieldValue}</Text>
                    </View>
                    </>
                    }
                />
            </View>
            {
                paymentStatus ? <Text style={{ color: 'red', alignSelf: 'center', paddingVertical: 10 }}>Pending</Text> : <Text></Text>

            }
        </View>
    )
}

export default QuestionAnswerCards

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 15,
        shadowColor: 'grey',
        shadowOffset: {
            width: 5,
            height: 15,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    header: {
        height: 50,
        backgroundColor: 'black',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',

    }
})