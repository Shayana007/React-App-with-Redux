import React, {Component} from "react";

class Eventhandle extends Component{
    constructor(props){
        super(props);
        this.state={data: 'data description'}
    
    this.updateState=this.updateState.bind(this);
};
updateState()
{
    this.setState({data:'new data created....'})
}
render(){
    return(
        <div>
            <button onClick={this.updateState}>changeState</button>
            <h3>{this.state.data}</h3>
        </div>
    );
}
}
export default Eventhandle