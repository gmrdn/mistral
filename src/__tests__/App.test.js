import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


describe('Affichage page principale', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div).toMatchSnapshot();
  });


});
