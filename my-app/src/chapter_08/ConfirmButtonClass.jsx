import React, { Component } from 'react'

class ConfirmButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

        // 클래스 내의 함수는 항상 bind 해줘야 함 !! 
        // this.handleConfirm = this.handleConfirm.bind(this);
    }

    /*
    // 이벤트 핸들러 함수 정의 ( bind 사용 시 )
    handleConfirm() {
        this.setState( (prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }))
    }
    */

    // arrow function 이용
    handleConfirm = () => {
        this.setState((prevState) => ( {
            isConfirmed : !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        )
    }
}

export default ConfirmButton