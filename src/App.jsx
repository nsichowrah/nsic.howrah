<<<<<<< HEAD
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
=======
import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import useScrollToTop from "./hooks/useScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Downloads from "./pages/Downloads";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

function App() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-site-bg font-body text-slate-700">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Courses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
>>>>>>> af693b5 (NSIC frontend update)
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> af693b5 (NSIC frontend update)
