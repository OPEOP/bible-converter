import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import COLORS from "../colors";

const NumButton = props => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => props.onNumPress(props.value)}
        >
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>
    );
};

NumButton.propTypes = {
    onNumPress: PropTypes.func,
    value: PropTypes.string
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '30%',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: COLORS.text_dark,
        fontWeight: 'bold'
    }
});

export default NumButton;
