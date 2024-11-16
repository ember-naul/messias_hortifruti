import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import CepDadosFormComponent from './CepDadosFormComponent';

function CepFormComponent() {
  const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState(null);

  const buscarCep = async (formulario) => {
    formulario.preventDefault();

      let response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      setDadosCep(response.data);
  
  };

  return (
    <Row>
      <Form onSubmit={buscarCep}>
        <Row>
          <Col>
            <Form.Control
              lg = {9}
              type="text"
              placeholder="Digite o seu CEP"
              maxLength={8}
              onChange={(cep) => setCep(cep.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit">Buscar</Button>
          </Col>
        </Row>
      </Form>
      {dadosCep &&
      <CepDadosFormComponent dadosCep = {dadosCep}/>
      }
    </Row>
  );
}
export default CepFormComponent;
