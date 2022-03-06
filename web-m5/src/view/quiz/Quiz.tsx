import { Button, Col, Input, Modal, Row, Image } from 'antd';
import React, { useState } from 'react'

export default function Quiz() {

    const [step, setState] = useState<number>(1);
    const [ first, setFirst ] = useState<string>("");

    const remembers: JSX.Element[] = [
        <Image src={require('./resources/UnRobot-4.jpg')}/>,
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZHpT2Pq7_fU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        <Image src={require('./resources/xmas.png')}/>
    ]

    return (
        <>
            <Modal
                title={<>¿Qué odio aunque le puedo coger cariño? <small>Lo siento Raquel</small></>}
                visible={step === 1}
                closable={false}
                footer={null}
            >
                <Input type='text' placeholder='***' maxLength={3} value={first} onChange={(e) => setFirst(e.target.value)}/>
                <br/><br/>
                <Button type='primary' block onClick={() => {
                    if(first.toLowerCase() === 'php') setState(-1);
                }}>Enviar respuesta</Button>
            </Modal>
            {
                step === -1 && (
                    <Row
                        gutter={[24,24]}
                    >
                        <Col span={24}>
                            <h1>Vaya, has desbloqueado algunos recuerdos del pasado</h1>
                            <p>Envíame un mensaje que me hará ilusión saber que has encontrado esto (se auto activaba en un año)</p>
                        </Col>
                        {
                            remembers.map((r) => (
                                <Col
                                    xs={24}
                                    md={12}
                                    lg={8}
                                    xxl={6}
                                >
                                    {r}
                                </Col>
                            ))
                        }
                    </Row>
                )
            }
        </>
    );
}