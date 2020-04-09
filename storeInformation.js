class Store extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: 'Glasses Store',
        logo: 'See the world!'
      }
    }
    getName = () =>{
        return this.state.name;
    }
    getLogo = () =>{
        return this.state.logo;
    }
}
export default Store;