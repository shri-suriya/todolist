import React from "react";

import InfoForm from "./InfoForm";

import axios from "axios";
import InfoDetails from "./InfoDetails";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Loged.css'


class Loged extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      editData: [],
      next: 0
    }
  }
  create = data => {
    if (!data.isEdit) {
      axios.post("http://localhost:5000/info", data).then(res => {
        // console.log(res);
        this.getAll();
      })
    } else {
      axios.put("http://localhost:5000/info/update", data).then(res => {
        console.log(res);
        this.getAll();
      })
    }
    // console.log(data);
  }

  componentDidMount() {
    let hasToken = JSON.parse(localStorage.getItem('sign'));
    console.log(hasToken);
    hasToken === null ? (this.setState({next: 1})):(this.getAll())
    
  }
  getAll() {
    axios.get("http://localhost:5000/info").then(res => {
      // console.log(res.data);
      this.setState({
        data: res.data
      })
    })
  }

  update = data => {
    console.log(data);
    this.setState({
      editData: data
    })
  }

  del = data => {
    // console.log(data);
    var option = window.confirm(`Are you Sure want to delete Info ${data.Name}`)
    if (option) {
      axios.delete(`http://localhost:5000/info/del/${data._id}`).then(res => {
        console.log(res);
        this.getAll();
      })
    }
  }

  
  render() {
    if (this.state.next === 1) {

      return(<Navigate to = "/home"></Navigate>)
      
    }
    return (
      <div className="Top">
        <div className="link">
        <Link to="/Home">Logout</Link>
        </div>
        
        <div className="TopMain">
          <h1 className="Head">To Do List</h1>
          
        </div>

        <div className="main">
          <div className="First">
            <InfoForm myData={this.create} setForm={this.state.editData} />
          </div>
          <div className="Second">
            <InfoDetails getData={this.state.data} setData={this.update} delData={this.del} />
          </div>

        </div>
      </div>
    )
  }
}
export default Loged;