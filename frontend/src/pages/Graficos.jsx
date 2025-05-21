import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Navbar';
import '../css/Graficos.css';
import Footer from '../components/Footer';

const Graficos = () => {
  const [graficos, setGraficos] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/principal')
      .then(res => setGraficos(res.data))
      .catch(err => console.error("Error al obtener los gráficos", err));
  }, []);

  if (!graficos) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh", background: "var(--gris-fondo)" }}>
        <div className="spinner-border text-success mb-3" role="status" />
        <span style={{ color: "var(--verde-oscuro)", fontWeight: 600, fontSize: "1.2rem" }}>Cargando gráficos...</span>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container-graficos" style={{ minHeight: "100vh" }}>
        <h1 className="titulo-principal mb-4">
          Visualización de Gráficos de Energía Nuclear y Renovable
        </h1>
        <p className="text-center mb-5" style={{ color: "var(--gris-texto)", fontSize: "1.15rem" }}>
          Explora la evolución y el impacto de la energía nuclear y renovable en el mundo a través de visualizaciones interactivas y comparativas.
        </p>
        <div className="grid-graficos">
          <Grafico
            nombre="Producción de Energía Nuclear y Renovable por Fuente"
            descripcion="Comparación de la producción anual por tipo de fuente energética."
            archivo={graficos.top10}
          />
          <Grafico
            nombre="Participación de Energías Renovables y Nucleares"
            descripcion="Porcentaje de participación de cada fuente en la matriz energética."
            archivo={graficos.torta}
          />
          <Grafico
            nombre="Capacidad Instalada por Fuente"
            descripcion="Evolución de la capacidad instalada de energía nuclear y renovable."
            archivo={graficos.lineas}
          />
          <Grafico
            nombre="Consumo Final de Energía"
            descripcion="Tendencias del consumo final de energía en los últimos años."
            archivo={graficos.area}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const Grafico = ({ nombre, archivo, descripcion }) => (
  <div className="card-grafico">
    <h2 className="card-titulo">{nombre}</h2>
    <img src={archivo} alt={nombre} className="card-imagen mb-3" />
    {descripcion && (
      <p style={{ color: "var(--gris-texto)", fontSize: "1rem", marginBottom: 0 }}>{descripcion}</p>
    )}
  </div>
);

export default Graficos;
