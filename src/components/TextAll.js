import React from 'react';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
`;
const TextView = styled.View`
    flex-direction: row;
    align-items: center;
`;
const Text = styled.Text`
    font-family: 'Poppins-Bold';
`;
export default ({name, ver}) => {
    return (
        <Container>
            <TextView>
                <Text style={{fontSize: 18}}>{name}</Text>
            </TextView>
            <TextView>
                <Text style={{fontSize: 10, marginRight: 5}}>{ver}</Text>
                {/* <FontAwesome5 size={18} name="caret-right" color="#8890A6" /> */}
            </TextView>
        </Container>
    );
};
