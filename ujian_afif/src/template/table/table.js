import React, { Component } from 'react';
import "./table.css"

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    delete=(idx)=>{
        this.props.delete(idx)
    }
    edit=(idx)=>{
        this.props.edit(idx)
    }
    render() {
        return (
            <div className="content">
                <div className="col2">
					<table cellSpacing="0" cellPadding="5" border="3" align="center">
						<thead className="table1">
							<tr>
								<th className="tNomor">No</th>
								<th className="tAsset">Nama Asset</th>
                                <th className="tKementerian">Kementerian</th>
                                <th>Provinsi</th>
                                <th>Tanggal Input</th>
                                <th>Jumlah Asset</th>
                                <th>Action</th>
							</tr>
						</thead>
						<tbody>
                            {
                                this.props.datasAsset.map((asset, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className="tdNo">{idx + 1}</td>
                                            <td>{asset.asset}</td>
                                            <td>{asset.kementerian}</td>
                                            <td>{asset.provinsi}</td>
                                            <td className="tdNo">{asset.tanggal}</td>
                                            <td className="tdNo">{asset.jumlah}</td>
                                            <td className="tdAction">
                                                <button onClick={()=>this.edit(idx)}>Update</button>
                                                <button onClick={()=>this.delete(idx)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
					</table>
				</div>
            </div>
        );
    }
}

export default Table;