import '../App.css'

// buton olarak karelerimizi oluşturduk

function Square(props) {
    return (
        <button className="Square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default Square;