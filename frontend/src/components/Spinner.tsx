import React from 'react';
import './styles/Spinner.css';

type Props = {
  size: number,
}

export default function Spinner({size}: Props) {
  const style = {
    width: size,
    height: size,
  }

  return (
    <div className="lds-spinner" style={style}><div></div><div></div>
    <div></div><div></div><div></div>
    <div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div></div>
  )
}