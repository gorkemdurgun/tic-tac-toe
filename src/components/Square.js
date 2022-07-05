import React from 'react';

export class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '-',
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value && this.state.value === '-') {
            this.setState({ value: this.props.value });
        }
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
