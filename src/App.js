import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      pilihan: '',
      konversi: '',
      nilaiAwal: 0,
      hasilAkhir: ''
    }
  }
  pilihan = (event) => {
    this.setState({pilihan: event.target.value});
  }

  konversi = (event) => {
      this.setState({konversi: event.target.value});
  }

  nilaiAwal = (event) => {
      this.setState({nilaiAwal: event.target.value});
  }

  hitung = () => {
    let pilihan = this.state.pilihan
    let konversi = this.state.konversi
    let nilaiAwal = this.state.nilaiAwal

    if (konversi == 8){
      this.setState({hasilAkhir: nilaiAwal})
    }
    else if (konversi == 10){
        let okt = nilaiAwal*1
        let des = parseInt(okt , 8)
        this.setState({hasilAkhir: des})
    }
    else if (konversi == 2){
        let okt = nilaiAwal*1
        let des = parseInt(okt,8)
        let bin = des.toString(2)
        this.setState({hasilAkhir: bin})
    }
    else if (konversi == 16){
        let okt = nilaiAwal*1
        let des = parseInt(okt,8)
        let hek = des.toString(16).toUpperCase()
        this.setState({hasilAkhir: hek})
    }
  }
  
  render(){
    return (
      <div className="container text-center">
        <div className="row mt-4">
          <div className="col bg-dark">
            <h5 className="fw-bold p-4 putih">Oktal ke </h5>
            <div className="mb-3 row">
              <label name="pilihan" value="10" className="col-sm-2 col-form-label putih text-start">Oktal</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" placeholder="Masukkan bilangan desimal" onChange={this.nilaiAwal} />
              </div>
            </div>
            <div className="mb-3 row form-group">
              <label className="col-sm-2 col-form-label putih text-start">Konversi</label>
              <div className="col-sm-10">
              <select className="form-select form-control form-select-md" aria-label=".form-select-sm example" onChange={this.konversi}>
                <option name="konversi" value="2">Biner</option>
                <option name="konversi" value="8" disabled>Oktal</option>
                <option name="konversi" value="16">Heksa Desimal</option>
                <option name="konversi" value="10">Desimal</option>
              </select>
              </div>
            </div>
            <div className="row pt-4 mb-4">
              <div className="col d-grid gap-2">
                <button type="button" onClick={this.hitung} className="btn btn-success">Hitung</button>
              </div>
            </div>
            <div className="row p-2 mb-2">
            <div className="alert alert-info"><p>{this.state.hasilAkhir}</p></div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}
export default App;
