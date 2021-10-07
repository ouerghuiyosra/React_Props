import PropTypes from 'prop-types';
const style={ border: 'none', color:'grey'}
 export const Myprofile = props =>{
    return (
      <div>
         {props.fullName} {props.bio} {props.profession}
     
        {props.children}
        </div>)
        
};
export    const AlertName = props => {
    return (
      <button onClick={() => props.handleName(`My name is Ouerghui yosra `)} style={style}>
        MyFullName
      </button>
    );
   }
   Myprofile.defaultProps = {
    fullName: '',
    bio:'',
    profession:''
   };
 Myprofile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string


   };

