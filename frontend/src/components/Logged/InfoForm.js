import React from "react";
import './infoform.css'
class InfoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            _id: "",
            Name: "",
            Task: "",
            isEdit: false
        }
    }
    infoChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    infoSubmit = event => {
        if (!this.state.isEdit) {
            console.log(this.state.Name);
            let data = {
                isEdit: this.state.isEdit,
                Name: this.state.Name,
                Task: this.state.Task
            }
            this.props.myData(data);
        }
        else {

            let data = {
                isEdit: this.state.isEdit,
                _id: this.state._id,
                Name: this.state.Name,
                Task: this.state.Task
            }
            this.props.myData(data);
        }

    }

    componentWillReceiveProps(props) {
        console.log(props.setForm._id);
        if (props.setForm._id != null) {
            this.setState({
                isEdit: true,
                _id: props.setForm._id,
                Name: props.setForm.Name,
                Task: props.setForm.Task

            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.infoSubmit} autoComplete="off">
                    <div className="form-group">
                        <label className="Heading">Name:</label><br></br><br></br>
                        <input type="text" className="form-Name" placeholder="Name" id="Name"
                            onChange={this.infoChange}
                            name="Name"
                            value={this.state.Name}
                        ></input>
                    </div><br></br>
                    <div className="form-group">
                        <label className="Heading">Task:</label><br></br><br></br>
                        <input className="form-Task" placeholder="Task" id="Task"
                            onChange={this.infoChange}
                            name="Task"
                            value={this.state.Task}
                        ></input><br></br><br></br>
                    </div><br></br>
                    <button type="submit" className="Heading-btn">{this.state.isEdit ? 'update' : 'create'}</button>
                </form>
            </div>
        )
    }
}
export default InfoForm;