import * as React from 'react';
import { Form } from 'semantic-ui-react';
import * as firebase from 'firebase';

export default class Demo extends React.Component {
    state = {
        userName: '',
        password: '',
        error: ''
    };
    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyBJLvZYyTAJBXjqKlV84FITMK4u2KenuMc',
            authDomain: 'chatapp-2361b.firebaseapp.com',
            databaseURL: 'https://chatapp-2361b.firebaseio.com',
            projectId: 'chatapp-2361b',
            storageBucket: 'chatapp-2361b.appspot.com',
            messagingSenderId: '677558807140'
        };
        firebase.initializeApp(config);

    }
    onSignIn = () => {
        this.setState({ error: '', loading: true });

        const { userName, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(userName, password)
            .then((userData) => {
               // AsyncStorage.setItem('userData', JSON.stringify(userData));
            
                this.setState({ error: ''});

            })
            .catch((userData) => {
                this.setState({ error: 'Authentication failed.'});
               
            });
    }

    render() {

        return (
            <div>
                Hello
            </div>
        );
    }
}
