import React, { Component } from 'react';
import Search from './Search'
import ListToBuy from'./ListToBuy'
import ListOwned from './ListOwned'

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      productList : [],
      name : '',
      price : 0,
      searchList : []
    }
    // this.searchFunction = this.searchFunction.bind(this)
  }

  async componentWillMount() {
    await this.setState({productList : this.props.products})
    console.log(this.state.productList)
    this.searchFunction("")
    
  }


  ListProductOwner = (id,price) =>{
    this.props.purchaseProduct(id,price)
  }

  searchFunction = (text) => {
    this.setState({searchList: [...this.state.productList.filter(item => {
      const newR = ((item.name.toLocaleLowerCase().includes(text)))
      return newR
      })]}
    )
  }

  // searchFunction(text) {
  //   this.setState({searchList: [...this.state.productList.filter(item => {
  //     const newR = ((item.name.toLocaleLowerCase().includes(text)))
  //     return newR
  //     })]}
  //   )
  //   console.log(this.state.searchList)
  // }

  render() {
    var STT = 0
    return (
      <div id="content">
        <h1>Add Product</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.setState({name: this.productName.value},{price: window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')})
          const name1 = this.productName.value
          const price1 = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct(name1, price1)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Product Price"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
        <p> </p>
        <h2>Buy Product</h2>
        <Search searchFunction = {this.searchFunction}></Search>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          { !this.searchList != null ? <tbody id="productList" >
                { this.state.searchList.map((product, key) => {
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
                                            onClick={(event) => {
                                                this.props.ListProductOwner(event.target.name, event.target.value)
                                              }}> 
                                            Buy
                                        </button>
                                    </td>
                                </div>
                            :null}
                        </tr>         
                    )
                })}
            </tbody>
            :<ListToBuy products={this.state.productList}
                        ListProductOwner = {this.ListProductOwner}
            ></ListToBuy>}
          {/* <ListToBuy products={this.state.productList}
                      ListProductOwner = {this.ListProductOwner}
          ></ListToBuy> */}
        </table>
        <h2>Product Owned</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <ListOwned products={this.state.productList}
                      
          ></ListOwned>
        </table>
      </div>
    );
  }
}

export default Main;