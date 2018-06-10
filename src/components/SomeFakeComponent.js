import React, { Component } from 'react';
import {connect} from 'react-redux';
import {someFakeAction} from '../actions/fakeActionCreator'


const mapStateToProps = state =>({
   
     myData:state.toggle.someFakeData
});


const mapDispatchToProps = (dispatch)=>{          // Attach all your methods here
    return{
       doSomething:  () => {
       	dispatch(someFakeAction())

       },
   }
}


class someFakeComponent  extends Component {
	render(){
		return(
         <div>
 
            <section onClick = {this.props.doSomething}>
            click me
               
            </section>

            <div>
            {this.props.myData + ""}
            </div>

         </div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(someFakeComponent);

