import React from 'react';
import { connect } from 'react-redux';
import { createBooks } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.titleError = false;
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    if (title) {
      createBook({
        id: Math.floor(Math.random() * 100000).toString(),
        title,
        category,
      });
      this.setState({
        title: '',
      });
    } else {
      this.titleError = true;
      this.forceUpdate();
    }
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="BooksForm">
        <h3 className="formtitle">Add New Book</h3>
        <form onSubmit={this.handleSubmit}>
          <p>Select a Category</p>
          <select
            className="cat"
            onChange={this.handleChange}
            name="category"
            value={category}
          >
            {categories.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            className={`title ${this.titleError ? 'error' : ''}`}
            placeholder="Title Here"
            onChange={this.handleChange}
            name="title"
            value={title}
          />
          <button className="btn-add" type="submit">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => dispatch(createBooks(book)),
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
