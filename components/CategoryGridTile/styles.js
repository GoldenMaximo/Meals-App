import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';

export const TouchableContainer = styled.View`
    flex: 1;
    margin: 15px;
    height: 150px;
    border-radius: 10px;
    ${Platform.OS === 'android' && Platform.Version >= 21 && 'overflow: hidden;'}
    elevation: 5;
`;

export const Title = styled.Text`
    font-family: open-sans-bold;
    font-size: 22px;
    text-align: right;
`;

export const Styles = StyleSheet.create({
    touchable: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
    },
});
