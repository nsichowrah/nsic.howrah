import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { getLatestSensorData } from "./services/api";
import axios from "axios";

function Box() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
  getLatestSensorData()
    .then(res => setData(res.data))
    .catch(err => console.error(err));
}, []);

  useEffect(() => {
    axios.get("https://backend-ten-alpha-44.vercel.app/api/sensor/latest")
      .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h1>NSIC Howrah Sensor Dashboard</h1>

      <Canvas style={{ height: "300px" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>

      {data.map((item, i) => (
        <div key={i}>
          Temp: {item.temperature} °C | Humidity: {item.humidity} %
        </div>
      ))}
    </div>
  );
}

export default App;