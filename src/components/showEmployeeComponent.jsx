import React, { Component } from 'react';
import RestCall from '../services/restcall';

class ShowEmployeeComponent extends Component {

            constructor(props){
                super(props)
                this.state={
                    employees:[]
                        
                    
                }
            }

            updateUser(id){
                this.props.history.push(`/add-employee/${id}`)
            }

            deleteList(id){
                RestCall.deleteUserById(id).then(res=>{
                    this.setState({
                        employees:this.state.employees.filter(employee=>employee.id!==id)
                    })
                })

            }

    componentDidMount(){
        RestCall.getUser().then(res=>{
            this.setState({
                employees:res.data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">All Employees Data</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email </th>
                            <th>Address </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map
                                (                     
                                    employee =>
                                <tr key={employee.id}>
                                    
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.address}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>this.updateUser(employee.id)}>Update</button>
                                  <span>    <button className="btn btn-danger" onClick={()=>this.deleteList(employee.id)}>Delete</button></span>
                                    </td>
                                </tr>
                            )

                        }


                    </tbody>

                </table>
            </div>
        );
    }
}

export default ShowEmployeeComponent;