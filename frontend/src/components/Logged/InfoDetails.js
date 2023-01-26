import React from "react";
import './InfoDetails.css'
class InfoDetails extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Details">
                {
                    //console.log(this.props.getdata.length)
                    this.props.getData.length > 0 ?
                        (
                            this.props.getData.map(e =>
                                <p className="Data" key={e._id}>
                                    {e.Name}  &nbsp; {e.Task}<br></br><br></br>
                                    <button className="btn-data"
                                        onClick={event => {
                                            this.props.setData(e)
                                        }}
                                    >edit</button>&nbsp;&nbsp;
                                    <button className="btn-data"
                                        onClick={event => {
                                            this.props.delData(e)
                                        }}>delete</button>
                                </p>
                            )

                        )
                        :
                        (
                            <p>
                                No data
                            </p>
                        )
                }
            </div>
        )
    }
}
export default InfoDetails;