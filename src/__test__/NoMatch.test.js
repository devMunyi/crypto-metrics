import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NoMatch from '../pages/NoMatch';

it('renders NoMatch Component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <NoMatch />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
