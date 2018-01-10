import React from 'react';
import {StyleSheet, View, ScrollView, Platform, Text, Picker} from 'react-native';

import NumPad from './components/num-pad';
import Filed from './components/text-field';
import Tabs from './components/tabs';
import Display from './components/display';
import Header from './components/header';
import * as CONST from './constants';

import CURRENCY from './values/currency';
import LENGTH from './values/length';
import VOLUME from './values/volume';
import WEIGHT from './values/weight';
import CONVERT_UNITS from './values/convert-to';

const tabValues = [
    {val: CONST.LENGTH, name: 'Длина'},
    {val: CONST.WEIGHT, name: 'Вес'},
    {val: CONST.CURRENCY, name: 'Валюта'},
    {val: CONST.VOLUME, name: 'Объём'}
];

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
                newValue = '0';
            } else {
                newValue = this.state.value.slice(0, -1);
            }
            this.setState({
                value: newValue
            });
        } else if (this.state.value.length < 10) {
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
            pickerValue: 0,
            unit: this.values[tabName][0].eqName
        });
    };

    handlePickerChange = (val, index) => {
        this.setState({
            pickerValue: val,
            ratio: this.values[this.state.activeTab][index].value,
            unit: this.values[this.state.activeTab][index].eqName
        });
    };

    calcData() {
        const units = this.state.activeTab === CONST.CURRENCY
            ? CONVERT_UNITS[this.state.activeTab][this.state.unit]
            : CONVERT_UNITS[this.state.activeTab];
        return units.map(({name, ratio}) => {
            let value = ratio * this.state.ratio * this.state.value;
            if (`${value}`.length > 6) {
                value = value.toPrecision(5).replace(/e\+/, ' * 10^').replace(/e-/, ' * 10^-');
            }
            return {
                value,
                unit: name,
                key: value + name
            }
        });
    };

    render() {
        const data = this.calcData();

        return (
            <View style={styles.container}>
                <Header
                    text={'The Bible Converter'}
                    onClickInfo={this.handleClickInfo}
                />
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
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={this.state.pickerValue}
                            mode='dropdown'
                            onValueChange={this.handlePickerChange}
                        >
                            {
                                this.values[this.state.activeTab].map((item) => (
                                    <Picker.Item
                                        key={item.name}
                                        label={item.name}
                                        value={item.name}
                                    />
                                ))
                            }
                        </Picker>
                    </View>
                </View>
                <ScrollView style={styles.bodyContainer}>
                    <View style={styles.body}>
                        <Display
                            data={data}
                        />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    picker: {
        width: '40%',
        borderBottomWidth: 1
    },
    field: {
        width: '60%'
    },
    bodyContainer: {
        paddingTop: 10
    },
    body: {
        padding: 10
    }
});
