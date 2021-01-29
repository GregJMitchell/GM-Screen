import React from 'react'
import Cookies from "universal-cookie"
import axios from 'axios'
import "../stylesheets/campaigns.css"
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const cookies = new Cookies()





class CampaignsView extends React.Component {
  state={
    campaigns: [],
    loading:false
  };

  componentDidMount() {
    console.log(cookies.get("user"))
    const user = cookies.get("user")
    axios.get('http://localhost:3001/api/v1/users/campaigns', {params: {id: user.id}})
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.setState({campaigns: res.data.data})
        cookies.set("campaigns", res.data.data)
      })

  }

  render () {
    return (
      <center>
      <CardColumns>
        {this.state.campaigns.map(function (campaign) {
        return [
            <Card bg='dark' text="light" border="danger" style={{width: '25rem'}}>
              <Card.Title>{campaign.attributes.title}</Card.Title>
              <Card.Body>
                <Card.Text>{campaign.attributes.description}</Card.Text>
                <Card.Img src={campaign.attributes.image}></Card.Img>
              </Card.Body>
              <Card.Footer>
                <Nav justify variant="pills">
                  <Nav.Item>
                    <Nav.Link href={"/campaigns/" + campaign.id}>View</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Edit</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Delete</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Footer>
            </Card>
              ]
            })}
        </CardColumns>
      </center>
        )
  }
}

export default CampaignsView