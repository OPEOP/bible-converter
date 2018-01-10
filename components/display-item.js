import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, FlatList, Text, View} from 'react-native';

const DisplayItem = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.item.value}
            </Text>
            <Text style={[styles.text, styles.addition]}>
                {props.item.unit}
            </Text>
        </View>
    );
};

DisplayItem.propTypes = {
    value: PropTypes.string,
    unit: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#334455'
    },
    addition: {
        fontSize: 15,
    }
});

export default DisplayItem;
