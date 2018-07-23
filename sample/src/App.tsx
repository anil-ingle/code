import * as React from 'react';
import TypeDemoUsingStyled from 'TypeDemoUsingStyled';
import GridDemo from 'GridDemo';
import ComponentFirst from 'ComponentFirst';
import Products from 'Products';
import { Provider } from 'react-redux';
import store from 'store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store()}>
        <div className="App" style={{ display: 'flex' }}>
        {console.log(store())}
          <Products />
         
        </div>
      </Provider>
    );
  }
}

export default App;
