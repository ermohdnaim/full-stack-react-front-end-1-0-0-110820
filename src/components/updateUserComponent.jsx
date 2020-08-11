import React, { Component } from 'react';
import RestCall from '../services/restcall'

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            firstName:'',
            lastName:'',
            email:'',
            address:''
        }
        this.handlerFormField=this.handlerFormField.bind(this)
        this.saveEmployee=this.saveEmployee.bind(this)
        this.cancelEmployee=this.cancelEmployee.bind(this)
    }
    componentDidMount(){
        RestCall.getUserById(this.state.id).then(res=>{
            let employee=res.data
            console.log(employee)
            this.setState({
                firstName:employee.firstName,
                lastName:employee.lastName,
                email:employee.email,
                address:employee.address
  
            })
        })
    }

    handlerFormField(event){
            console.log(event.target.name)
            this.setState({
            [event.target.name]:event.target.value

        })
    }

    saveEmployee(e){
        e.preventDefault()
        let employee={
            id:this.state.id,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            address:this.state.address
        }
        RestCall.updateUserById(employee).then(res =>{
            console.log("data saved sucessfully")
             this.props.history.push('/show-employees')
        })

    }
    cancelEmployee(){
        this.props.history.push(`/show-employees`)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h2 className="text-center">Add Employee</h2>
`                       <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name :</label>
                                    <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.handlerFormField} placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name :</label>
                                    <input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={this.handlerFormField} placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <label>Email :</label>
                                    <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handlerFormField} placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label>Address : </label>
                                    <input type="text" name="address" className="form-control" value={this.state.address} onChange={this.handlerFormField} placeholder="Address"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                   <span> <button className="btn btn-danger" onClick={this.cancelEmployee}>Cancel</button></span>
                                </div>

                            </form>
    
                        </div>`
                    </div>

                </div>

            </div>
        );
    }
}

export default UpdateEmployeeComponent;