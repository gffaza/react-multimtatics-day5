import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
    Navbar,
    MobileNav,
  } from "@material-tailwind/react";

export default function Produk() {
  
    const dataProduk = [
        {
          nama: "Cyberpunk 2077",
          harga: "Rp 699.999",
          foto:"https://cdn.europosters.eu/image/1300/posters/cyberpunk-2077-ready-player-v-i102945.jpg",
          keterangan:" Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification."
        },
        {
          nama: "Stardew Valley",
          harga: "Rp 500.000",
          foto:"https://m.media-amazon.com/images/I/51MFu2e82VL._AC_UF894,1000_QL80_.jpg",
          keterangan:"Stardew Valley is a 2016 farm life simulation role-playing video game developed by Eric (ConcernedApe) Barone. Players take the role of a character who inherits their deceased grandfather's dilapidated farm in a place known as (Stardew Valley). The game was originally released for Windows in February 2016 before being ported to other platforms."
        },
        {
          nama: "Grand Theft Auto V",
          harga: "Rp 401.000",
          foto:"https://m.media-amazon.com/images/I/71aqYbO8-xL._AC_UF894,1000_QL80_.jpg",
          keterangan:"Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall."
        }
      ]
    return (
        <div>
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Produk</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProduk.map((product, index) => (
                <BookingCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>      
  );
}

export function BookingCard({product}) {
    return (
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={product.foto}
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-start justify-between">
            <Typography variant="h5" color="blue-gray" className="font-bold">
              {product.nama}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              {product.harga}
            </Typography>
          </div>
          <Typography className="text-left justify-between"color="gray">
            {product.keterangan}
          </Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <Button size="lg" fullWidth={true}>
            BUY NOW
          </Button>
        </CardFooter>
      </Card>
    );
  }