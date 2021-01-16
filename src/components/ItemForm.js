import React, { Component } from "react";
import Overview from './Overview';

class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          item: '',
          items: []
        };

        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
      this.setState({item: event.target.value});
    }
  
    handleSubmit(event) {
      this.setState({
        items: this.state.items.concat(this.state.item),
        item: ''
      });
      event.preventDefault();
    }

    handleDelete(item) {
      let data = this.state.items.filter(i => i !== item);
      this.setState({ items: data });
    }

    render() {
      const { item, items } = this.state;

        return (
          <>
          <form onSubmit={this.handleSubmit}>
            <label>
              Items:
              <input type="text" value={item} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
            <Overview 
              items={items}
              handleDelete={this.handleDelete}
            />
          </>
        );
    }
}

export default ItemForm;