import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Tabs = props => {
    return (
        <View style={styles.container}>
            {
                props.tabs.map(val => (
                    <TouchableOpacity
                        key={val}
                        style={styles.tab}
                        onPress={() => props.onPressToTab(val)}
                    >
                        <Text style={[styles.tabText, props.activeTab === val && styles.activeTab]}>
                            {val}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

Tabs.propTypes = {
    onPressToTab: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.string),
    activeTab: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    tab: {
        padding: 2
    },
    tabText: {
        fontSize: 15,
        color: '#323940'
    },
    activeTab: {
        color: '#ff473b',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default Tabs;
