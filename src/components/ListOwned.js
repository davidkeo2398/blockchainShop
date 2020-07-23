import React, { Component } from 'react';

var STT = 0;

class ListOwned extends Component{
    render(){
        return(
            <tbody id="productListOwner" >
                { this.props.products.map((product, key) => {
                    return(                    
                        <tr key={key}>
                            {/* <th scope="row">{product.id.toString()}</th> */}
                            { product.purchased ?
                                <div style={{width:'0.75rem'}}>
                                    <th scope="row">{STT+=1}</th>
                                    <td>{product.name}</td>
                                    <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                                    <td>{product.owner}</td>
                                    <td>
                                        { !product.purchased ? 
                                        
                                            <button
                                                name={product.id}
                                                value={product.price}
                                                onClick={(event) => {
                                                    this.props.purchaseProduct(event.target.name, event.target.value)
                                                }}>
                                                Buy
                                            </button>

                                        :null}
                                        
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

export default ListOwned;