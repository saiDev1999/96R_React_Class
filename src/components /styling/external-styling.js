import { Component } from "react";
import "./styles.css"
import InlineStyles from "./inline-styles";


class ExternalStyles extends Component{

    render(){
        return(
            <>
            <h4 className={"greeting"}>Good morning</h4>
            <InlineStyles/>
            </>
        )
    }
}
export default ExternalStyles