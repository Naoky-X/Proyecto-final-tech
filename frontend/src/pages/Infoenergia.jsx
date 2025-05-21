import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Header from "./../components/Navbar";
import Footer from '../components/Footer';
import '../css/variables.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const InfoEnergia = () => {
  return (
    <>
      <Header />
      <div style={{ background: "var(--gris-fondo)", minHeight: "100vh" }}>
        <Container className="my-5" style={{ maxWidth: 700 }}>
          <h1 className="text-center mb-4" style={{ color: "var(--verde-oscuro)", fontWeight: 700, fontSize: "2.5rem" }}>
            Energía Nuclear
          </h1>

          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="mb-4 shadow" style={{ border: "2px solid var(--verde-claro)", borderRadius: "1.5rem" }}>
              <Card.Img variant="top" src="/Nuclear.jpg" style={{ borderRadius: "1.5rem 1.5rem 0 0", objectFit: "cover", height: "220px" }} />
              <Card.Body>
                <Card.Title style={{ color: "var(--verde-medio)", fontWeight: 700 }}>¿Qué es la energía nuclear?</Card.Title>
                <Card.Text>
                  La energía nuclear es una fuente de energía que se obtiene a partir de reacciones nucleares, principalmente la fisión de átomos de uranio o plutonio en los reactores nucleares. Es una alternativa eficiente y de bajas emisiones de carbono para la generación de electricidad a gran escala.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>

          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="mb-4 shadow" style={{ border: "2px solid var(--verde-claro)", borderRadius: "1.5rem" }}>
              <Card.Img variant="top" src="https://cdn0.ecologiaverde.com/es/posts/4/1/1/ventajas_y_desventajas_de_la_energia_nuclear_1114_orig.jpg" style={{ borderRadius: "1.5rem 1.5rem 0 0", objectFit: "cover", height: "220px" }} />
              <Card.Body>
                <Card.Title style={{ color: "var(--verde-medio)", fontWeight: 700 }}>Innovaciones Tecnológicas</Card.Title>
                <ul>
                  <li>Reactores modulares pequeños (SMR) para mayor seguridad y flexibilidad.</li>
                  <li>Reactores de cuarta generación con mejor eficiencia y menor generación de residuos.</li>
                  <li>Tecnologías de reciclaje de combustible nuclear.</li>
                  <li>Desarrollo de reactores de fusión nuclear como fuente futura de energía limpia.</li>
                </ul>
                <Card.Title className="mt-4" style={{ color: "var(--verde-medio)", fontWeight: 700 }}>Aplicaciones Futuras</Card.Title>
                <ul>
                  <li>Producción de hidrógeno limpio mediante energía nuclear.</li>
                  <li>Desalinización de agua a gran escala.</li>
                  <li>Suministro energético para bases espaciales y misiones de larga duración.</li>
                  <li>Integración en redes eléctricas inteligentes y resilientes.</li>
                </ul>
              </Card.Body>
            </Card>
          </motion.div>

          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="mb-4 shadow" style={{ border: "2px solid var(--verde-claro)", borderRadius: "1.5rem" }}>
              <Card.Img variant="top" src="https://www.nationalgeographic.com.es/medio/2022/11/04/central-nuclear_e67661b5.jpg" style={{ borderRadius: "1.5rem 1.5rem 0 0", objectFit: "cover", height: "220px" }} />
              <Card.Body>
                <Card.Title style={{ color: "var(--verde-medio)", fontWeight: 700 }}>Principales Ventajas</Card.Title>
                <ul>
                  <li>Alta capacidad de generación eléctrica con bajas emisiones de carbono.</li>
                  <li>Proporciona energía continua, independiente de condiciones climáticas.</li>
                  <li>Reduce la dependencia de combustibles fósiles.</li>
                  <li>Requiere menos espacio que otras fuentes renovables para igual cantidad de energía.</li>
                </ul>
                <Card.Title className="mt-4" style={{ color: "var(--verde-medio)", fontWeight: 700 }}>Aplicaciones Comunes</Card.Title>
                <ul>
                  <li>Generación de electricidad para ciudades y grandes industrias.</li>
                  <li>Propulsión de submarinos y portaaviones nucleares.</li>
                  <li>Producción de isótopos para uso médico e industrial.</li>
                  <li>Suministro energético en regiones remotas o aisladas.</li>
                </ul>
              </Card.Body>
            </Card>
          </motion.div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default InfoEnergia;
