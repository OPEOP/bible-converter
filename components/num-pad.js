import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import NumButton from './num-btn';

const numPadValues = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['.', '0', String.fromCharCode(8656)]];

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
        borderTopColor: '#789',
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
