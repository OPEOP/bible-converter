import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import COLORS from "../colors";

const Tabs = props => {
    return (
        <View style={styles.container}>
            {
                props.tabs.map(item => (
                    <TouchableOpacity
                        key={item.val}
                        style={styles.tab}
                        onPress={() => props.onPressToTab(item.val)}
                    >
                        <Text style={[styles.tabText, props.activeTab === item.val && styles.activeTab]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

Tabs.propTypes = {
    onPressToTab: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    activeTab: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    tab: {
        padding: 2
    },
    tabText: {
        fontSize: 15,
        color: COLORS.text_dark
    },
    activeTab: {
        color: COLORS.text_red,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default Tabs;
