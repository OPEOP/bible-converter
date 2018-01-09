import React from 'react';
import {StyleSheet, View, ScrollView, Platform, Text, Picker} from 'react-native';

import NumPad from './components/num-pad';
import Filed from './components/text-field';
import Tabs from './components/tabs';
import * as CONST from './constants';

import CURRENCY from './values/currency';
import LENGTH from './values/length';
import VOLUME from './values/volume';
import WEIGHT from './values/weight';

const tabValues = [CONST.LENGTH, CONST.WEIGHT, CONST.CURRENCY, CONST.VOLUME];

export default class App extends React.Component {
    state = {
        value: '0',
        activeTab: CONST.LENGTH,
        pickerValue: 0,
        ratio: LENGTH[0].value,
        unit: LENGTH[0].eqName
    };

    values = {
        [CONST.CURRENCY]: CURRENCY,
        [CONST.LENGTH]: LENGTH,
        [CONST.VOLUME]: VOLUME,
        [CONST.WEIGHT]: WEIGHT
    };

    handleChangeNumPadValue = val => {
        if (val === CONST.DELETE_CHAR) {
            let newValue;
            if (this.state.value === '0') return;
            if (this.state.value.length === 1) {
                newValue= '0';
            } else {
                newValue = this.state.value.slice(0, -1);
            }
            this.setState({
                value: newValue
            });
        } else if (this.state.value.length < 12) {
            let newValue;
            if (this.state.value === '0' && val === '.') {
                newValue = this.state.value + val;
            } else if (this.state.value === '0') {
                newValue = val;
            } else {
                newValue = this.state.value + val;
            }
            this.setState({
                value: newValue
            });
        }
    };

    handleTabSwitcher = tabName => {
        this.setState({
            activeTab: tabName,
            pickerValue: 0
        });
    };

    handlePickerChange = (val, index) => {
        this.setState({
            pickerValue: val,
            ratio: this.values[this.state.activeTab][index].value,
            unit: this.values[this.state.activeTab][index].eqName
        });
    };

    render() {
        console.log('render')
        return (
            <View style={styles.container}>
                <Tabs
                    onPressToTab={this.handleTabSwitcher}
                    tabs={tabValues}
                    activeTab={this.state.activeTab}
                />
                <View style={styles.input}>
                    <Filed
                        style={styles.field}
                        value={this.state.value}
                    />
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.pickerValue}
                        mode='dropdown'
                        onValueChange={this.handlePickerChange}
                    >
                        {
                            this.values[this.state.activeTab].map((item, index) => (
                                <Picker.Item
                                    key={item.name}
                                    label={item.name}
                                    value={item.name}
                                />
                            ))
                        }
                    </Picker>
                </View>
                <ScrollView>
                    <View style={styles.body}>
                        <Text>{`${this.state.ratio} ${this.state.unit}`}</Text>
                    </View>
                </ScrollView>
                <View>
                    <NumPad
                        onNumPress={this.handleChangeNumPadValue}
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
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    picker: {
        width: '40%',
    },
    field: {
        width: '60%'
    },
    body: {
        padding: 10
    }
});
