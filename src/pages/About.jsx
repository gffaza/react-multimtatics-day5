import React, { useState } from 'react'

export default function About() {

  let angkaVar = 0;
  const [angkaState, setAngkaState] = useState(0);
  const [name, setName] = useState("");

  const bilangHalo = () =>{
    alert('Halo, ini halaman about!')
  }

  const bilangHaloParam = (nama) =>{
    alert(`Halo, ${nama} `);
  };

  function tambah() {
    angkaVar = angkaVar + 1;
    let angkaBaru = angkaState + 1;
    setAngkaState(angkaBaru);
  }

  const kurang = () => {
    angkaVar = angkaVar - 1;
    let angkaBaru = angkaState - 1;
    setAngkaState(angkaBaru);
  }

  const ubahNama = (event) => {
    setName(event.target.value);
  }

  
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => bilangHaloParam("Budi")}>Klik Ini
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={bilangHalo}>Klik Itu
      </button>

      <hr />
      Angka Var:{angkaVar} <br />
      Angka State: {angkaState} <br />
      <button onClick={tambah} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        +
      </button>
      <button onClick={kurang} className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        -
      </button>
      <br />
      <br />
      <input type="text" placeholder="Masukkan Nama: " onChange={(e) => ubahNama(e)} />
      <text>Name: {name}</text>
    </>
  )
}
