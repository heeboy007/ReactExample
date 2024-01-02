import AddNum from "../Components/AddNum";
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