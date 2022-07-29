// This package helps to make styled components as below
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

// This is the way of renaming destructured variables in ES6. We changed name of components from left to Left and right to Right because it is React's convention of giving components capital letter names.
// export const SplitScreen = ({ left: Left, right: Right, leftWeight = 1, rightWeight = 1 }) => {
//   return (
//     <Container>
//       <Pane weight={leftWeight}>
//         <Left />
//       </Pane>
//       <Pane weight={rightWeight}>
//         <Right />
//       </Pane>
//     </Container>
//   );
// };

// Since we have not passed left and right components as props in SplitScreen component from App.js, instead passed the left and right components as children.
// Therefore, We replaced left and right props with the children prop. Since, children prop is going to be an array in this case containg all of the elements that we paased as children to our SplitScreen component in App.js. We take out elements from children array as const [left, right] = children;
// We have used left and right in small case and not in capitalize case because these are elements and not components.
export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
