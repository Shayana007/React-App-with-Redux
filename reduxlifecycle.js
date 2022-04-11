import React, {Component} from "react";

class Apps extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: 0
        }
        this.setNumber = this.setNumber.bind(this)
    };
    setNumber(){
        this.setState({data: this.state.data + 1})
    }
    render(){
        return(
            <div>
                <button onClick = {this.setNumber}>Add One More</button>
                <Content newNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends Component{
    componentWillMount(){
        console.log('Component WILL MOUNT')
    }
    componentDidMount(){
        console.log('Component DID MOUNT')
    }
    componentWillReceiveProps(newProps){
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState){
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log('Component WILL UPDATE')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('Component DID UPDATE')
    }
    render(){
        return(
            <div>
                <h3>{this.props.newNumber}</h3>
            </div>
        );
    }
}
export default Apps;