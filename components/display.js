import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import DisplayItem from './display-item';

const Display = props => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                renderItem={item => <DisplayItem {...item}/>}
            />
        </View>
    );
};

Display.propTypes = {
    data: PropTypes.array
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
});

export default Display;
