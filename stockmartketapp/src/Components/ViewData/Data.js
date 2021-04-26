import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

const Data = (props) => {
    const { viewData } = props;
    return (
        <>
            <div className="table_styling">
                <div className="bg-light text-center py-3 h4 mb-0">
                    Saved Data Table </div>
                <table className="table pl-0">

                    <tbody className="text-center">
                        {viewData.map((dataitem, index) => {
                            return (

                                <tr key={index} >
                                    <td>{dataitem.name}</td>
                                    <td>{dataitem.symbol}</td>
                                    <td>{dataitem.market_cap}</td>
                                    <td><button className="btn btn-danger center w-75" onClick={() => { props.deletebutton(dataitem) }}>Delete</button></td>
                                    <td>{dataitem.current_price}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
                <NavLink to="/"><button className=" d-block btn btn-primary mx-auto py-2 px-5 mb-3">Back</button></NavLink>
            </div>
        </>
    )

}


export default Data