import React from 'react';
import {StyleSheet, View, ScrollView, Platform} from 'react-native';

import NumPad from './components/num-pad';
import Filed from './components/text-field';
import Tabs from './components/tabs';
import * as CONST from "./constants";

const tabValues = [CONST.LENGTH, CONST.WEIGHT, CONST.CURRENCY, CONST.VOLUME];

export default class App extends React.Component {
    state = {
        value: '0',
        activeTab: CONST.LENGTH
    };

    handleChangeValue = val => {
        const newValue = this.state.value + val;
        this.setState({
            value: newValue
        });
    };

    handleTabSwitcher = tabName => {
        this.setState({
            activeTab: tabName
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Tabs
                    onPressToTab={this.handleTabSwitcher}
                    tabs={tabValues}
                    activeTab={this.state.activeTab}
                />
                <View>
                    <Filed
                        value={this.state.value}
                    />
                </View>
                <ScrollView>

                </ScrollView>
                <View>
                    <NumPad
                        onNumPress={this.handleChangeValue}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                paddingTop: 30
            },
            android: {
                paddingTop: 30
            }
        })
    },
});
