import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CryptoDetails from '../pages/CryptoDetails';

it('renders CryptoDetails Component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CryptoDetails />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
