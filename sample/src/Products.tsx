import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { displayProducts } from './api/action';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import Product from 'Product';

const Bind = styled.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
`;
const FormPage = styled.default.div`
    width: 400px;
    position: absolute;
    top: 100px;
`;
const DisplayFormButton = styled.default.div`
    width: 100px;
`;

type QueryParam = {
    include?: string[] | string,
    sort?: string,
    limit?: string,
    offset?: string,
    filter?: string,
};
type RequestPayload = {
    body?: any,
    id?: string,
    params?: QueryParam,
    cart_reference?: string,
    path?: string,
    token?: string,
    data?: any
};
// action object
type Action<P> = {
    type: string,
    payload?: P,

};
interface DispatchProps {
    getProducts: () => Action<RequestPayload>;
}
type Props = DispatchProps & {
};

interface StateProps {
}

export class Products extends React.Component<Props, StateProps> {
    state = {
        products: [],
    };

    componentDidMount() {
        this.props.getProducts();
    }

    componentWillReceiveProps(store: any) {

        this.setState({
            products: store.data.data
        });
        if (store.data.data && store.data.data.length > 0) {
            this.setProducts(store.data.data);
        }
    }

    setProducts(data: any) {
        let products = [];
        // FIXME: use map
        for (let i = 0; i < data.length; i++) {
            let val = data[i];
            products.push(<Product key={i} info={val} />);
        }
        this.setState({
            products: products
        });
    }

    render() {
        console.log('data render ' + this.state.products.length);
        return (
            <Bind style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.products}

            </Bind>
        );
    }
}
const mapStateToProps = (store: any) => {
    console.log('st' + store);
    return {
        data: store, // selData(store)
    };
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    {
        getProducts: displayProducts
    }
)(Products);
