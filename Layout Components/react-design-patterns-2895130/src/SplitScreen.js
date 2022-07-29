// This package helps to make styled components as below
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: 1;
`;

// This is the way of renaming destructured variables in ES6. We changed name of components from left to Left and right to Right because it is React's convention of giving components capital letter names.
export const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};
