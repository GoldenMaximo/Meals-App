import styled from 'styled-components/native';

export const DefaultText = styled.Text`
    font-family: open-sans;
    text-align: ${({ align }) => (align ? align : 'auto')};
`;
