import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Cards from '../components/Cards';

describe('Cards Component Import', () => {
  test('Cards component can be imported', () => {
    expect(Cards).toBeDefined();
  });

  test('Cards component renders without crashing', () => {
    const wrapper = shallow(<Cards />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Cards component matches snapshot', () => {
    const wrapper = shallow(<Cards />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Cards component renders in the DOM', () => {
    render(<Cards />);
    const cardsElement = screen.getByTestId('cards-container');
    expect(cardsElement).toBeInTheDocument();
  });
});
