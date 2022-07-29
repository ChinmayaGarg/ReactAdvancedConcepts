import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: 'red' }}>{message}</p>;
};

function App() {
  // return <SplitScreen left={LeftHandComponent} right={RightHandComponent} leftWeight={1} rightWeight={3} />;
  // Instead of passing left and right components as props in SplitScreen component as above. layout components accept their children as children in the sense of react as below.
  // This also helps in accepting props in a child component like below. If we would have passed left and right components as props in SplitScreen Component and not children then we would have to pass these names and message in left and right components through our SplitScreen Component then to left and right component in SplitScreen.js.
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name={'Chinmaya'} />
      <RightHandComponent message={'Hello World!'} />
    </SplitScreen>
  );
}

export default App;
