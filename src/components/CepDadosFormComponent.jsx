import { Card, CardBody, CardHeader } from "react-bootstrap";

function CepDadosFormComponent(props) {
    return (
        <>
            <Card className="mt-2">
                <CardHeader>
                    <h6>Cep: {props.dadosCep.cep ? props.dadosCep.cep : "Não informado."}</h6>
                </CardHeader>
                <CardBody>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td><strong>Logradouro:</strong></td>
                                <td>{props.dadosCep.logradouro ? props.dadosCep.logradouro : "Não informado"}</td>
                            </tr>
                            <tr>
                                <td><strong>Complemento:</strong></td>
                                <td>{props.dadosCep.complemento ? props.dadosCep.complemento : "Não informado"}</td>
                            </tr>
                            <tr>
                                <td><strong>Unidade:</strong></td>
                                <td>{props.dadosCep.unidade ? props.dadosCep.unidade : "Não informado."}</td>
                            </tr>
                            <tr>
                                <td><strong>Bairro:</strong></td>
                                <td>{props.dadosCep.bairro ? props.dadosCep.bairro : "Não informado."}</td>
                            </tr>
                            <tr>
                                <td><strong>Cidade:</strong></td>
                                <td>{props.dadosCep.localidade ? props.dadosCep.localidade : "Não informado."}</td>
                            </tr>
                            <tr>
                                <td><strong>Estado:</strong></td>
                                <td>{props.dadosCep.uf ? props.dadosCep.uf : "Não informado."}</td>
                            </tr>
                            <tr>
                                <td><strong>Região:</strong></td>
                                <td>{props.dadosCep.regiao ? props.dadosCep.regiao : "Não informado."}</td>
                            </tr>
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </>
    );
    
}
export default CepDadosFormComponent;