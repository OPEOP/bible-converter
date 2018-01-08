import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';

const Filed = props => {
    return (
        <Text
            style={styles.filed}
        >
            {props.value}
        </Text>
    );
};

Filed.propTypes = {
    value: PropTypes.string
};

const styles = StyleSheet.create({
    filed: {
        paddingLeft: 20,
        fontSize: 25,
        height: 50
    },
});

export default Filed;
