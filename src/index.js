StoreInformation = {
    name: 'Glasses Store',
    details: 'This is a Glasses Store',
    phone: '23124-1234',
    email: 'glassesStore@glassesStore.com',
    location: 'Street X, In Y'
}

class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        title: StoreInformation.name,
        details: StoreInformation.details,
        phone: StoreInformation.phone,
        email: StoreInformation.email,
        location: StoreInformation.location
      }
    }
    render(){
      return(
        <div className="card white">
            <div className="card-content blue-text">
                <span id="cardTitle" className="card-title center-align"><h1>{this.state.title}</h1></span>
                <p className="center-align">{this.state.details}</p>
            </div>
            <div className="col s6 card-action">
                <span><h4 className="blue-text">Login</h4></span>
                <input placeholder="Enter your username" id="usernameLogin" type="text" className="validate"/>
                <input placeholder="Enter your password" id="passwordLogin" type="password" className="validate"/>
                <button className="btn blue" type="submitLogin" name="action">Submit
                    <i className="material-icons right"></i>
                </button>
            </div>
            <div className="col s6 card-action">
                <span><h4 className="blue-text ">Register</h4></span>
                <input placeholder="Enter your username" id="usernameRegister" type="text" className="validate"/>
                <input placeholder="Enter your password" id="passwordRegister" type="password" className="validate"/>
                <button className="btn blue" type="submitRegister" name="action">Submit
                    <i className="material-icons right"></i>
                </button>
            </div>
            <div className="col s12 white">
                <span className="blue-text">Any doubt, contact us</span><br/>
                <span className="blue-text">Phone: {this.state.phone}</span><br/>
                <span className="blue-text">E-mail: {this.state.email}</span><br/>
                <span className="blue-text">Location: {this.state.location}</span>
            </div>
        </div>
      );
    }
}
ReactDOM.render(<Login />, document.getElementById('root2'));