import React, { Component } from "react";
import Overview from './Overview';

class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          item: '',
          items: [],
          isEditing: false,
          editIndex: '',
          editItem: ''
        };

        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
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

    handleEdit(index) {
      this.setState({ isEditing: true, editIndex: index });
    }

    handleEditSubmit(event) {
      this.state.items.splice(this.state.editIndex, 1, this.state.editItem);
      this.setState({ 
        items: this.state.items,
        editIndex: '',
        isEditing: false,
        editItem: ''
      });
      event.preventDefault();
    }

    render() {
      const { item, items, editItem } = this.state;

        return (
          <>
         {!this.state.isEditing && 
          <form onSubmit={this.handleSubmit}>
            <label>
              Items:
              <input type="text" name="item" value={item} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          }
          {this.state.isEditing && 
            <form onSubmit={this.handleEditSubmit}>
              <label>
                Edit Item:
              <input type="text" name="editItem" value={editItem} onChange={this.handleChange} />
                </label>
              <input type="submit" value="Submit Change" />
            </form>
          }
            <Overview 
              items={items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </>
        );
    }
}

export default ItemForm;