import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from "../colors";

const Header = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.text}
            </Text>
            <TouchableOpacity
                style={styles.info}
                onPress={() => {
                    Alert.alert(
                        'Информация',
                        'Здравствуй, мой дорогой Друг!\nСо всеми предложениями и замеченными ошибками, пожалуйста, напиши на Email:\nhyoustone@yahoo.com',
                        [
                            {text: 'OK'},
                        ],
                    )
                }}
            >
                <Icon name="info" size={25} color="#3E3E3E" />
            </TouchableOpacity>
        </View>
    );
};

Header.propTypes = {
    text: PropTypes.string,
    onClickInfo: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 28,
        fontWeight: '900',
        color: COLORS.text_red,
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 10,
        textShadowColor: COLORS.text_red_shadow,
        opacity: 0.8
    },
    info: {

    }
});

export default Header;
