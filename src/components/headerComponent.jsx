import React ,{Component} from 'react'

class HeaderComponent extends Component{

    render(){
        return(

            <div>
                <header>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                        <div className="navbar-brand">
                             <a className="nav-link" href="/show-employees">Home</a>
                        </div>

                        <div className="navbar-nav">
                             <a className="nav-link" href="/add-employee">Add-Employee</a>
                        </div>

                    </nav>
                </header>



            </div>


        )
    }

}
export default HeaderComponent; 