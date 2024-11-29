import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../config";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Product() {
  const [isLoading, setisLoading] = useState(false);
  const [dataProduk, setdataProduk] = useState(null);

  const loadData = () => {
    setisLoading(true);
    axios
      .get(`${baseUrl}products`)
      .then((response) => {
        const hasil = response.data;
        setdataProduk(hasil);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setisLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      {isLoading || dataProduk === null ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataProduk.map((item, index) => (
            <Card key={index} className="shadow-md rounded-lg overflow-hidden">
              <CardHeader color="blue-gray" className="relative h-56 m-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-6">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="text-sm mb-4 h-16 overflow-hidden"
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-4 font-semibold"
                >
                  $ {item.price.toLocaleString()}
                </Typography>
                <div className="flex text-left">
                  <Button
                    size="sm"
                    color="gray"
                    ripple="light"
                    className="w-full"
                  >
                    <Link to={`/detail/${item.id}`}>Detail</Link>
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
