import './Row.css';

function AlignRow(props) {
    return (
        <div className="align-row">
            {props.children} 
        </div>
    );
}

export default AlignRow;
