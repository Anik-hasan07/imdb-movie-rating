import React, { Component } from 'react'
import { FaStar,FaRegStar } from 'react-icons/fa';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      <br/>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Poster</th>
      <th scope="col">SL</th>
      <th scope="col">mOVIE Name</th>
      <th scope="col">Like</th>
      <th scope="col">your review</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td> <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg"/> </td>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>207</td>
      <td> <FaStar/></td>
    </tr>
    <tr>
    <td> <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg"/> </td>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>102</td>
      <td><FaRegStar/></td>
    </tr>
    <tr>
    <td> <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg"/> </td>
    <th scope="row">2</th>
      <td>Jacob</td>
      <td>100</td>
      <td><FaRegStar/></td>
    </tr>
  </tbody>
</table>
    </div>
    )
  }
}
