import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { displayProducts } from './api/action';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const Container = styled.default.a`
    width: 400px;
    height: 464px;
    margin: 5px;
    position: relative;
`;

const Content = styled.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
`;

const ImageBox = styled.default.div`
    width: 400px;
    height: 170px;
    display: flex;
    background: brown;
`;

const Info = styled.default.div`
    width: 400px;
    height: 300px;
    font-size: 20px;
    background: #e2e5e6;;
    color: black;
`;

const FontStyleHeader = styled.default.b`
    font-size:25px;
    color: darkslategray;
`;

interface DispatchProps {
    // getProducts: () => Action<RequestPayload>;
}

type Props = DispatchProps & {
    info: any
};

interface StateProps {}

export class Product extends React.Component<Props> {

    state = {
        name: '',
        description: '',
        amount: 0,
        size: '',
    };

    componentDidMount() {
        let val = this.props.info;
        let description = val.description + '';
        if (description.length > 100) {
            description = description.substring(0, 30);
        }
        console.log('size' + val.size);
        this.setState({
            name: val.name,
            description: description,
            amount: val.price[0].amount,
            size: val.size
        });

    }

    // componentWillReceiveProps(info: any) {
    //     let val = this.props.info;
    //     console.log('val' + val);
    //     this.setState({
    //         name: info.name,
    //         description: info.description,

    //         size: info.size
    //     });
    // }

    render() {

        return (
            <div >
                <Container href="#">
                    <Content style={{ margin: 5, display: 'block' }}>
                        <ImageBox />
                        <Info >
                            <div style={{ paddingLeft: 5 }}>
                                <FontStyleHeader>Product:</FontStyleHeader>{this.state.name}
                            </div>
                            <div style={{ paddingLeft: 5 }}>
                                <FontStyleHeader>description:</FontStyleHeader>{this.state.description}
                            </div>
                            <div style={{ paddingLeft: 5 }}>
                                <FontStyleHeader>amount:</FontStyleHeader>{this.state.amount}
                            </div>
                            <div style={{ paddingLeft: 5 }}>
                                <FontStyleHeader>size:</FontStyleHeader>{this.state.size}
                            </div>
                        </Info>
                    </Content>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        //     data: store, // selData(store)
    };
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    {
        // getProducts: displayProducts
    }
)(Product);
