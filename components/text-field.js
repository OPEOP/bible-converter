import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';

const Filed = props => {
    return (
        <Text
            style={[styles.filed, props.style]}
        >
            {props.value}
        </Text>
    );
};

Filed.propTypes = {
    value: PropTypes.string,
    style: PropTypes.any
};

const styles = StyleSheet.create({
    filed: {
        paddingLeft: 10,
        fontSize: 30,
        height: 35
    },
});

export default Filed;
