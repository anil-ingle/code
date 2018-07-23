
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Products from './component/Products';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store()}>
                    <Products />
                </Provider>, 
                document.getElementById('root') 
            </div>
        );
    }
}



















