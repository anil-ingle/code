import React, { Component } from 'react';
import {  Form } from 'semantic-ui-react';

class Test extends Component {
    state = {
        rangeVal: 0
    }
    changeVal(event, data) {
        let val = data.value;
        this.setState({
            rangeVal: val
        });



    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        let primeNumber = [];
        for (var counter = 0; counter <= this.state.rangeVal; counter++) {

            var notPrime = false;
            for (var i = 2; i <= counter; i++) {
                if (counter % i === 0 && i !== counter) {
                    notPrime = true;
                }
            }
            if (notPrime === false) {
                if (counter > 1) {
                    let val = <b style={{ color: this.getRandomColor() }}>{counter + " "}</b>;
                    primeNumber.push(val)
                }

                //console.log(counter);
            }
        }
       // console.log("prime number " + primeNumber)
        let count = 1;
        let nValArraY = [];
        let rev = [];
        let c = <br />
        for (let i = 0; i < primeNumber.length; i++) {
            if (count <= 10) {
                nValArraY.push(primeNumber[i]);
                count++;
            } else {
                rev.push(nValArraY.reverse());
                rev.push(c)
                nValArraY = [];
                nValArraY.push(primeNumber[i]);
                count = 2;

            }
        }
        rev.push(nValArraY.reverse());
        rev.push(c)
        //nValArraY=nValArraY.reverse();
        return (
            <div>
                <div style={{ paddingBottom: 20 }}>
                    <Form.Field>
                        <Form.Input label='number' placeholder='enter number'
                       
                            onChange={this.changeVal.bind(this)}
                        />
                    </Form.Field>
                </div>
                <div>
                    {rev}
                </div>
            </div>
        );
    }
}

export default Test;
