import React, { Component } from 'react';
import './App.css';
import { Form, Table, Login } from "./template";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasAsset: [{
        asset: "Lemari",
        kementerian: "Kesehatan",
        provinsi: "Kalimantan",
        tanggal: "2020-12-12",
        jumlah: 3
      }],
      datasAssetEdit:{},
      val: 0,
      index: "",
      statusLogin: false
    }
  }

  save = (dataAsset) => {
    const { asset, kementerian, provinsi, tanggal, jumlah } = dataAsset
    let newAsset = this.state.datasAsset

    if (this.state.val === 0) {
      if (asset !== "" && kementerian !== "" && provinsi !== "" && tanggal !== "" && jumlah !== 0) {
        newAsset.push({ asset, kementerian, provinsi, tanggal, jumlah })
        this.setState({
          datasAsset : newAsset
        })
        alert('Data Berhasil Diinput!')
      }else{
        alert('Masukkan Semua Data!')
      }
    } else {
      let index = this.state.index
      newAsset[index].asset = asset
      newAsset[index].kementerian = kementerian
      newAsset[index].provinsi = provinsi
      newAsset[index].tanggal = tanggal
      newAsset[index].jumlah = jumlah
      this.setState({
        datasAsset: newAsset,
        val: 0
      })
      alert('Data Berhasil Diedit!')
    }
  }

  delete = (index) =>{
    let newAsset = this.state.datasAsset
    newAsset.splice(index, 1)
    this.setState({
      datasAsset:newAsset
    })
    alert('Data Berhasil Dihapus!')
  }

  reset = () =>{
    this.setState({
      datasAssetEdit:{}
    })
  }

  edit = (index) =>{
    this.setState({
      val: 1,
      index:index
    })
    const dataAssetEdit = this.state.datasAsset[index]
    this.setState({
      datasAssetEdit : dataAssetEdit
    })
  }

  doLogin = (username, password) => {
    if((username === "alafif") && (password === "alafif")) {
      this.setState(prevState => ({
        statusLogin: !prevState.statusLogin
      }));
      this.props.changeLogin();
    } else {
      alert("Username atau Password yang Dimasukkan Salah!");
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login statusLogin={this.state.statusLogin} doLogin={this.doLogin} />
          </Route>
          <Route path="/">
            <div className="body">
              <Form statusLogin={this.state.statusLogin} save={this.save} value={this.state.datasAssetEdit} reset={this.reset} />
              <Table edit={this.edit} delete={this.delete} datasAsset={this.state.datasAsset}/>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeLogin: () => dispatch({
    type: "LOGIN_SUCCESS"
  })
})

export default connect(null, mapDispatchToProps)(App);
