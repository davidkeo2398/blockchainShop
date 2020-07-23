import React, { Component } from 'react';

var STT  = 0;

class ListToBuy extends Component{

    render(){
        onclick = (e) =>{
            if (typeof this.props.click === 'function') {
                this.props.click(e.target.value);
            }
        }
        return(
            <tbody id="productList" >
                { this.props.products.map((product, key) => {
                    return(                    
                        <tr key={key}>
                            {/* <th scope="row">{product.id.toString()}</th> */}
                            { !product.purchased ?
                                <div style={{width:'0.75rem'}}>
                                    <th scope="row">{STT+=1}</th>
                                    <td>{product.name}</td>
                                    <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                                    <td>{product.owner}</td>
                                    <td>
                                        <button
                                            name={product.id}
                                            value={product.price}
                                            handleClick={this.onclick}> 
                                            Buy
                                        </button>
                                    </td>
                                </div>
                            :null}
                        </tr>         
                    )
                })}
            </tbody>
        );
    }
}

export default ListToBuy;