import React, {useState} from 'react';
import { Container, Table } from 'react-bootstrap';
import Messages from '../../helpers/message';

const ShowMessagesTable = () => {
    const [messageData, setMessageData] = useState("")

    
  return (
      <Container bg="dark" fluid style={{padding: '250px'}}>
      <h1 style={{color: 'orange', display:'flex', justifyContent: 'center', alignContent:'center' , backgroundColor: 'black'}}>Here are your messages:</h1>
    <Table striped bordered hover style={{padding: '200px'}} variant="dark">
        <Messages  />
      </Table>
      </Container>
  )
}

export default ShowMessagesTable;
