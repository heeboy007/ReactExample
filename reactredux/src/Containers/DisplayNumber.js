import DisplayNum from "../Components/DisplayNum";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    }
}

function mapReduxDispatchToReactProps() {
    return {};
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNum);

/*
function DisplayNumber() {
    const [ number, setNumber ] = useState(0);
    store.subscribe(() => {
        setNumber(store.getState().number);
    });
    return (
        <DisplayNum number={number}></DisplayNum>
    );
}

export default DisplayNumber;
*/