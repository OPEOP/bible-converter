import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {DELETE_CHAR} from '../constants';

import NumButton from './num-btn';
import COLORS from "../colors";

const numPadValues = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['.', '0', DELETE_CHAR]];

const NumPad = props => {
    return (
        <View style={styles.container}>
            {
                numPadValues.map(padValues => (
                    <View
                        key={padValues.join()}
                        style={styles.row}
                    >
                        {
                            padValues.map(val => (
                                <NumButton
                                    key={val}
                                    value={val}
                                    onNumPress={props.onNumPress}
                                />
                            ))
                        }
                    </View>
                ))
            }
        </View>
    );
};

NumPad.propTypes = {
    onNumPress: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: COLORS.separate_line,
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    }
});

export default NumPad;
