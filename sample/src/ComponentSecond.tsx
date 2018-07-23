import * as React from 'react';
import * as styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
// declare global {
//     interface Window { st: any; }
// }

// window.st = window.st || {};

const Container = styled.default.div`
    display: block;
    width: 400px;
    position: absolute;
    top: 100px;
  
`;
const BlockDiv = styled.default.div`
    padding:2px;
   
`;

type Props = StateProps & DispatchProps & {

};

interface StateProps {
    data: {
        userName: string,
        password: string
    };
}

interface DispatchProps {
}

export class ComponentSecond extends React.Component<Props> {
    state = {
        userName: '',
        password: '',
       
    };
    componentDidMount() {
        // 
    }
   
    componentWillReceiveProps(store: any) {
        let user = store.data.userName;
        let pass = store.data.password;
        console.log('mapStateToProps...user ' + user + '   ' + pass);
        this.setState({
            userName: user,
            password: pass
        });
    }
    render() {
        return (
            <Container>

                <BlockDiv>
                    <h1>Username</h1>{' '}{this.state.userName}
                </BlockDiv>
                <BlockDiv>
                    <h1>Password</h1>{' '}{this.state.password}
                </BlockDiv>
            </Container>
        );
    }
}

const getData = (store: any) => {
    console.log(store);

    return store;
};

// const selData = createSelector(
//     [getData], (data) => {
//         console.log(data);
//         return data;
//     }
// );

const mapStateToProps = (store: any) => {
    console.log(store);
    return {
        data: store, // selData(store)
    };
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    {}
)(ComponentSecond);