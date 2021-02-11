import React, { Component } from 'react';
import {Input} from "../../component"
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import "./form.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            asset: "",
            kementerian: "",
            provinsi: "",
            tanggal: "",
            jumlah: 0
        }
        this.handleSub = this.handleSub.bind(this)
    }

    handleSub(event){
        this.setState({
            asset:"",
            kementerian:"",
            provinsi:"",
            tanggal:"",
            jumlah:0
        })
        event.preventDefault()
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        // if(!this.props.isLogin){
        //     return <Redirect to="/login" />
        // }

        if ("asset" in this.props.value) {
            this.setState({
                asset: this.props.value.asset,
                kementerian: this.props.value.kementerian,
                provinsi: this.props.value.provinsi,
                tanggal: this.props.value.tanggal,
                jumlah: this.props.value.jumlah
            })
            this.props.reset()
            this.setState({
                name:"",
                dob:"",
                age:"",
                gender:"",
                hobby: [],
                religion:"",
                address:"",
            })
        }

        const { asset, kementerian, provinsi, tanggal, jumlah } = this.state
        return (
            <div className="header">
                <div className="form">
                    <h1>Form Asset Input</h1>
                    <form className="isiForm" onSubmit={this.handleSub}>
                        <div>
                            <br/>
                            Nama Asset:<br />
                            <Input className="asset" type="text" name="asset" value={asset} placeholder="Masukkan Nama Asset" onChange={this.setValue} />
                            <br/><br/>
                        </div>
                        <div>
                            Kementerian:
                            <Input className="kementerian" type="text" name="kementerian" value={kementerian} placeholder="Masukkan Kementerian" onChange={this.setValue} />
                            <br/><br/>
                        </div>
                        <div>
                            Provinsi:
                            <Input className="provinsi" type="text" name="provinsi" value={provinsi} placeholder="Masukkan Provinsi" onChange={this.setValue} />
                            <br/><br/>
                        </div>
                        <div>
                            Tanggal Input:
                            <Input className="tanggal" type="date" name="tanggal" value={tanggal} onChange={this.setValue} />
                            <br/><br/>
                        </div>
                        <div>
                            Jumlah Asset:
                            <Input className="jumlah" type="number" name="jumlah" value={jumlah} onChange={this.setValue} />
                            <br/><br/>
                        </div>
                        <div className="button">
                            <button onClick={()=>this.props.save({ asset, kementerian, provinsi, tanggal, jumlah })}>Submit</button>
                            <button type="reset">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        isLogin: state.Auth.statusLogin
    }
}

export default connect(mapStateToProps)(Form);