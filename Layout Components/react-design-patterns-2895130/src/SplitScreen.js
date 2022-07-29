// This package helps to make styled components as below
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

// This is the way of renaming destructured variables in ES6. We changed name of components from left to Left and right to Right because it is React's convention of giving components capital letter names.
export const SplitScreen = ({ left: Left, right: Right, leftWeight = 1, rightWeight = 1 }) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  );
};
