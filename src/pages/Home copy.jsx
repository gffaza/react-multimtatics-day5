import React from 'react'
import Orang from'../components/Orang'

export default function Home() {
    const styles = {
        judul : {
          color: 'red',
          fontSize: '24px',
        }
      }
    
      let isTampil = true
    
      const dataOrang = [
        {
          nama: "Budi",
          alamat: "Jakarta"
        },
        {
          nama: "Andi",
          alamat: "Surabaya"
        },
        {
          nama: "Rudi",
          alamat: "Semarang"
        }
      ]
    return (
        <>
        <div>Home</div>
    
       <div style={styles.judul}>1</div>
        <div>2</div>
        <div>3</div>
    
        <Orang nama="Budi" alamat="Jakarta" /> 
        {isTampil && <Orang nama={"Andi"} alamat={"Surabaya"}/>}
        {isTampil ? <Orang nama="Budi" alamat="Semarang" /> : <>Orang tidak tampil </>}
    
        <br />
          <p>looping:</p>
        {
          dataOrang.map((orang,index) =>{
            return <Orang key={index} nama={orang.nama} alamat={orang.alamat} />
          })
        } 
        </>
      )
}
