import React, { Component } from "react";

class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          item: '',
          items: []
        };

        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({item: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Item was submitted: ' + this.state.item);
      this.setState({items: this.state.items.concat(this.state.item)});
      event.preventDefault();
    }

    render() {
        return (
          <>
          <form onSubmit={this.handleSubmit}>
            <label>
              Items:
              <input type="text" value={this.state.item} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>
           {this.state.items.map((item, index) =>
             <li key={index}>{item}</li>
            )}
          </div>
          </>
        );
    }
}

export default ItemForm;