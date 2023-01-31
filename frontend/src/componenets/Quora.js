import React from 'react'
import Quoraheader from './Quoraheader'
import Feed from "./Feed";
import "./css/Quora.css";

export default function Quora() {
  return (
    <div className="quora">
    <Quoraheader />
    <div className="quora__contents">
      <div className="quora__content">
        <Feed />
      </div>
    </div>
  </div>
  )
}
