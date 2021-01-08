import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    height: 200px;
    width: 100%;
    background-color: #ccc;
    border-radius: 10px;
    overflow: hidden;
    margin-vertical: 10px;
`;

export const MealTitleContainer = styled.Text`
    background-color: rgba(0, 0, 0, 0.5);
    padding-vertical: 5px;
    padding-horizontal: 12px;
    text-align: center;
`;

export const MealTitle = styled.Text`
    font-family: open-sans-bold;
    font-size: 20px;
    color: white;
`;

export const Row = css`
    display: flex;
    flex-direction: row;
`;

export const MealHeader = styled.View`
    ${Row};
    height: 88%;
`;

export const MealDetail = styled.View`
    ${Row};
    height: 12%;
    padding-horizontal: 10px;
    justify-content: space-between;
    align-items: center;
`;

export const MealBackgroundImg = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`;
