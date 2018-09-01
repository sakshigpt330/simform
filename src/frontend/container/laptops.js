import { connect } from 'react-redux';
import React, { Component } from 'react';
import Input from '../components/inputComponent';
import RangeSlider from '../components/rangeSlider';

class Laptops extends Component {

  constructor(props) {
    super(props);
    this.state = {
      brand: [],
      min: "20000",
      max: "100000",
      ramSize: [],
    }
  }

  componentWillMount() {
    this.props.dispatch({ type: 'LAPI' });
    this.props.dispatch({ type: 'RAM' });
  }

  checkedVlaues(val, state) {
    const INDEX = this.state[state].indexOf(val);
    if(INDEX > -1) {
      (this.state[state]).splice(INDEX, 1);
    } else {
      this.setState(
        { [state]: [ ...this.state[state], val ]})
      this.props.dispatch({ type: 'FILTERS', payload: val });
    }
  }

  checkboxes(val, state) {
    return [
      <Input
        type="checkbox"
        name={val}
        value={val}
        key="checkbox"
        onChange={(val) => this.checkedVlaues(val, state)}
      />,
      <span key="name">{val}</span>,
      <br key="break" />
    ]
  }

  labels(label, state, data) {
    return (
      <div>
        <label>{label}: </label>
        {data && data.map(val => (
          this.checkboxes(val, state)
        ))}
      </div>
    )
  }

  laptopsList() {
    const LIST = this.props.lapis;
    return this.labels("Brand", 'brand', LIST);
  }

  laptopPrice() {
    return (
      <div className="slidecontainer">
        <label>Price: </label>
        <RangeSlider
          min="20000"
          max={this.state.max}
          value={this.state.min}
          className="slider"
          id="myRange"
          onChange={(val) => this.setState({ min: val })}
        />{this.state.min} Inr.<br />
        <RangeSlider
          min={this.state.min}
          max="100000"
          value={this.state.max}
          className="slider"
          id="myRange"
          onChange={(val) => this.setState({ max: val })}
        />{this.state.max} Inr.
      </div>
    )
  }

  ramSize() {
    const LIST = this.props.rams;
    return this.labels("Ram", 'ramSize', LIST);
  }

  displayLaptops() {
    const DATA = this.props.laptops;
    return (
      DATA.map((data, i) =>  (
        <img src={data} key={i} alt={i} />
      ))
    )
  }

  categories() {
    return (
      <form className="filters">
        {this.laptopsList()}<br />
        {this.laptopPrice()}<br />
        {this.ramSize()}
      </form>
    )
  }

  render() {
    return (
      <div className="pad_5">
        {this.categories()}
        <div className="data">
          {this.displayLaptops()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lapis: state.Lapis.name,
  rams: state.Rams.size,
  laptops: state.Filters.data,
});

export default connect(mapStateToProps)(Laptops);
