import axios from "axios";
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { baseUrl } from "../config";

export default function Detail() {
    const { id} = useParams()
    const[isLoading, setisLoading] = useState(false);
    const [detailProduk, setdetailProduk] = useState(null);

    const loadData = () =>{
        setisLoading(true)
        axios
           .get(`${baseUrl}products/${id}`)
           .then((response) => {
               const hasil = response.data
               setdetailProduk(hasil)
           })
           .catch(function (err) {
               alert(err)
           })
           .finally(() => setisLoading(false))
    }

    useEffect(() => { //onload
        loadData()
        return () => { //onunload
        };
    },[]);

  return (
    
    <>
    {isLoading || detailProduk == null ? (
        <Spinner />
      ) : (
        <>
          <table className="w-full border">
            <thead>
                <tr>
                <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Nama Produk</th>
                  <th className="px-4 py-2">Harga</th>
                  <th className="px-4 py-2">Deskripsi</th>
                  <th className="px-4 py-2">Gambar</th>
                  <th className="p-2 w-1/6">Gambar</th>
                </tr>
            </thead>
            <tbody>
                {detailProduk.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{item.title}</td>
                            <td className="p-2">{item.price}</td>
                            <td className="p-2">{item.description}</td>
                            <td className="p-2">
                                <img src={item.image} width="100px" />
                            </td>
                            <td>
                                <Link
                                    to={`/detail/${item.id}`}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Detail
                                </Link>
                            </td>
                        </tr>
                    )
                    })}
            </tbody>
           
          </table>
        </>
      )}
    </>
  );
}
