import styled from 'styled-components/native';

export const Screen = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-horizontal: ${({ paddingHorizontal }) =>
        paddingHorizontal ? paddingHorizontal : '0px'};
`;
