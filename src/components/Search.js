import React, { Component } from 'react';
import {Form} from 'react-bootstrap'

class Search extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput : ''
        }
    }
    render(){
        onchange = e =>{
            this.setState({searchInput : e.target.value})
            console.log(this.state.searchInput)
            this.props.searchFunction(e.target.value)
        }
        
        return(
            <div>
                <Form>
                    <Form.Group controlId="formGroupSearch">
                        <Form.Control type="text" placeholder="Search..." onChange = {onchange}/>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default Search;