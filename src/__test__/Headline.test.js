import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Headline from '../components/Headline';

it('renders Headline Component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Headline />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
