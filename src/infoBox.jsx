import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function InfoBox({ info }) {
  const Inti_url =
    "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=2432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Hot_Url =
    "https://images.unsplash.com/photo-1523289149715-594065d1d3e7?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_Url =
    "https://plus.unsplash.com/premium_photo-1663099753562-4afbb1b613e6?q=80&w=2954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_Url =
    "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW58ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? Rain_Url : info.temp > 15 ? Hot_Url : Cold_Url
          }
          title="Mist"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
              {" "}
              The weather can be described as <b>{info.weather}</b> Feels Like ={" "}
              {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
