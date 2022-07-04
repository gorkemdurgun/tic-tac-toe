import React from 'react';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '-',
        };
    }

    render() {
        return (

            <button
                className="square"
                onClick={async () => {
                    await this.props.onClick();
                    //console.log(this.props.value)
                }}>
                {this.state.value}
            </button>

        );
    }

}

export default Square;