import * as React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { connect } from 'react-redux';
import { displayProducts } from '../api/action';

type Props = StateProps & DispatchProps & {

};

interface StateProps {
}

interface DispatchProps {
    sendData: (data: any) => {};
}

export  class Products extends React.Component<Props> {
   
   
    render() {

        return (
           <div>
               <h2>Products Page</h2>
               
           </div>
        );
    }
}
const mapStateToProps = (store: any) => {
    return {
        // cartItems: selCartItems(store)
    };
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    {
        sendData: displayProducts
    }
)(Products);
