import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

function Home() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get("http://localhost:4000/api/v1/products");
        setData(data);
    };
    const ShowData = ({ data }) => {
        return (
            <div>
                {data.map((el) => {
                    console.log(el.name);
                    return <h3 id={el.id}>{el.name}</h3>;
                })}
            </div>
        );
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Create Product</Card.Title>
                                <Button variant="primary">Create Product</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>All Products List</Card.Title>
                                <Button variant="primary">All Products List</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Create Product</Card.Title>
                                <Button variant="primary">Create Product</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <ShowData data={data} />
                </Row>
            </Container>
        </div>
    )
}

export default Home