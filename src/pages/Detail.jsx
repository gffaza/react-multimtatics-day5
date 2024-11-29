import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../config";
import Spinner from "../components/Spinner";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Detail() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [detailProduk, setdetailProduk] = useState(null);

  const loadData = () => {
    setisLoading(true);
    axios
      .get(`${baseUrl}products/${id}`)
      .then((response) => {
        const hasil = response.data;
        setdetailProduk(hasil);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setisLoading(false));
  };

  useEffect(() => {
    loadData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {isLoading || detailProduk == null ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <Card className="w-full max-w-xl h-full shadow-lg">
              <CardHeader
                floated={false}
                className="relative h-96 bg-gray-200 rounded-lg"
                style={{
                  backgroundImage: `url(${detailProduk.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></CardHeader>
            </Card>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <Typography
              variant="h3"
              color="blue-gray"
              className="font-bold tracking-wide"
            >
              {detailProduk.title}
            </Typography>
            <Typography
              variant="paragraph"
              color="gray"
              className="text-lg leading-relaxed"
            >
              {detailProduk.description}
            </Typography>
            <Typography
              variant="h4"
              color="blue-gray"
              className="font-bold tracking-wide"
            >
              ${detailProduk.price.toLocaleString()}
            </Typography>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outlined"
                color="blue-gray"
                className="w-full lg:w-1/3"
              >
                Add to Cart
              </Button>
              <Button
                color="gray"
                className="w-full lg:w-1/3"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
