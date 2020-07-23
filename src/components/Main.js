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

    }
  }

  async componentWillMount() {
    await this.setState({productList : this.props.products})
    console.log(this.state.productList)
  }


  ListProductOwner = (id,price) =>{
    this.props.purchaseProduct(id,price)
  }

  render() {
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
        <Search></Search>
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
          <ListToBuy products={this.state.productList}
                      ListProductOwner = {this.ListProductOwner}
          ></ListToBuy>
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