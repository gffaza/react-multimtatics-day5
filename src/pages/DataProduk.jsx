import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const dataProduk = [
  {
    nama: "Cyberpunk 2077",
    harga: "Rp 699.999",
    foto:
      "https://cdn.europosters.eu/image/1300/posters/cyberpunk-2077-ready-player-v-i102945.jpg",
    keterangan:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
  },
  {
    nama: "Stardew Valley",
    harga: "Rp 500.000",
    foto:
      "https://m.media-amazon.com/images/I/51MFu2e82VL._AC_UF894,1000_QL80_.jpg",
    keterangan:
      "Stardew Valley is a 2016 farm life simulation role-playing video game developed by Eric (ConcernedApe) Barone.",
  },
  {
    nama: "Grand Theft Auto V",
    harga: "Rp 401.000",
    foto:
      "https://m.media-amazon.com/images/I/71aqYbO8-xL._AC_UF894,1000_QL80_.jpg",
    keterangan:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
  },
];

const DataProdukTable = () => {
  return (
    <Card className="mt-6 w-full">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 p-4 text-white"
      >
        <Typography variant="h5" color="white">
          Table of Data Produk
        </Typography>
      </CardHeader>
      <CardBody className="overflow-x-auto">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Nama Produk</th>
              <th className="px-4 py-2">Harga</th>
              <th className="px-4 py-2">Foto</th>
              <th className="px-4 py-2">Keterangan</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataProduk.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.nama}</td>
                <td className="px-4 py-2">{item.harga}</td>
                <td className="px-4 py-2">
                  <img
                    src={item.foto}
                    alt={item.nama}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{item.keterangan}</td>
                <td className="px-4 py-2 flex gap-2">
                  <IconButton variant="text" color="blue" size="sm">
                    <PencilIcon className="h-5 w-5" />
                  </IconButton>
                  <IconButton variant="text" color="red" size="sm">
                    <TrashIcon className="h-5 w-5" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default DataProdukTable;
