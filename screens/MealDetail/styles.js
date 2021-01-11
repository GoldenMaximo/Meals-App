import styled from 'styled-components/native';

export const Image = styled.Image`
    width: 100%;
    height: 200px;
`;

export const Details = styled.View`
    display: flex;
    flex-direction: row;
    padding: 15px;
    justify-content: space-around;
`;

export const Title = styled.Text`
    font-family: open-sans-bold;
    font-size: 22px;
    text-align: center;
`;

export const ListItem = styled.View`
    margin-vertical: 10px;
    margin-horizontal: 20px;
    border-color: #ccc;
    border-width: 1px;
    padding: 10px;
`;
