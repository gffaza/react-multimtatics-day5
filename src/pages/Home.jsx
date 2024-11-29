import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  IconButton,
} from "@material-tailwind/react";

// Sample Data
const featuredGames = [
  {
    nama: "Cyberpunk 2077",
    harga: "Rp 699.999",
    foto: "https://cdn.europosters.eu/image/1300/posters/cyberpunk-2077-ready-player-v-i102945.jpg",
  },
  {
    nama: "Stardew Valley",
    harga: "Rp 500.000",
    foto: "https://m.media-amazon.com/images/I/51MFu2e82VL._AC_UF894,1000_QL80_.jpg",
  },
  {
    nama: "Grand Theft Auto V",
    harga: "Rp 401.000",
    foto: "https://m.media-amazon.com/images/I/71aqYbO8-xL._AC_UF894,1000_QL80_.jpg",
  },
];


// Banner Section
function Banner() {
  return (
    <div
      className="bg-cover bg-center h-72 flex items-center"
      style={{
        backgroundImage:
          "url('https://cdn.europosters.eu/image/1300/posters/cyberpunk-2077-ready-player-v-i102945.jpg')",
      }}
    >
      <div className="bg-black/50 p-6 text-white max-w-xl">
        <Typography variant="h4" className="font-bold">
          Welcome to GameStore
        </Typography>
        <Typography className="mt-2">
          Explore the latest and greatest games at the best prices.
        </Typography>
        <Button className="mt-4" color="gray">
          Explore Now
        </Button>
      </div>
    </div>
  );
}

// Game Card Component
function GameCard({ game }) {
  return (
    <Card className="shadow-lg">
      <CardHeader floated={false} className="h-48">
        <img src={game.foto} alt={game.nama} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="font-bold">
          {game.nama}
        </Typography>
        <Typography className="text-gray-600">{game.harga}</Typography>
      </CardBody>
      <CardFooter>
        <Button fullWidth color="gray">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}

// Featured Games Section
function FeaturedGames() {
  return (
    <div className="container mx-auto py-8">
      <Typography variant="h4" className="font-bold mb-6">
        Featured Games
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
}

// Home Component
export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedGames />
    </div>
  );
}
