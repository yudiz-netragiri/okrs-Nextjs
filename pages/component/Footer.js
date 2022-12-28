import { useQuery } from '@apollo/client'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GET_ALL_FOOTERDATA } from '../../graphql/api'

function Footer () {
  const { data } = useQuery(GET_ALL_FOOTERDATA)

  return <div className="footer">
    <div className='container'>
    <Row className='text-center'>
      {data?.getFrontFooter?.map((i, index) =>
      <Col key={index}>
        <h5 >{i.eType}</h5>
        {i.aResults.map((item, key) => <p key={key}>{item.sUrl}</p>)}
        </Col>
      )}
    </Row>
    </div>
  </div>
}

export default Footer
