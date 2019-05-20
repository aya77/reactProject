import React,{Component} from 'react';
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BranchesBarComponent extends Component{

    render(){

      return (
        <div className ="row branchesBar ">
          <div className=" col-9 text-left pt-4 pl-5" >
          <strong >Select a  branch to jump into</strong>
          </div>
          <div  className=" col-3 text-left pt-4 pr-5" >
          <span> <strong >all branches
          <FontAwesomeIcon icon={faChevronDown} />
          </strong>
          </span>
         </div>
          </div>
      )


    }



}

export default BranchesBarComponent;
