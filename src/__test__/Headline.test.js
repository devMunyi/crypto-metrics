import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Headline from '../components/Headline';

/* eslint-disable comma-dangle */
it('renders Headline Component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Headline cryptoCount={0} cryptoDetails={{}} page="" />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
