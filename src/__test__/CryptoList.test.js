import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CryptoList from '../pages/CryptoList';

it('renders CryptoList Component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CryptoList />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
