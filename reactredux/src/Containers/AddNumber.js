import AddNum from "../Components/AddNum";
import { connect } from 'react-redux';

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: (size) => {
            dispatch({type: "INCREMENT", size: size});
        }
    };
}

export default connect(null, mapReduxDispatchToReactProps)(AddNum);

/*
import React, { Component } from "react";
import store from "../store";

class AddNumber extends Component{
    render() {
        return <AddNum onClick={(size) => {
            store.dispatch({type: 'INCREMENT', size: size});
        }}></AddNum>
    }
};

export default AddNumber;
*/