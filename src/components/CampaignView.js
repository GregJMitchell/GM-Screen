import React from 'react'
import Cookies from "universal-cookie"
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import "../stylesheets/campaign.css"
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css'

const cookies = new Cookies()

const user = cookies.get("user")

export default class CampaignView extends React.Component {

 async componentDidMount() {
  const response = await axios.get("http://localhost:3001/api/v1/campaigns/" + this.props.match.params.id)
  console.log(response.data)
  this.setState({campaign: response.data.data})
}

render() {
  console.log(this.state)
  console.log(this.props)
  console.log(this.props.match.params.id)
  if (this.state != null){
  return (
    <center>
      <Card bg='dark' text='light' style={{width: '25rm'}}>
        <Card.Title>{this.state.campaign.attributes.title}</Card.Title>
        <Card.Body>
        <Card.Img  src={this.state.campaign.attributes.image}></Card.Img>
          <Card.Text>{this.state.campaign.attributes.description}</Card.Text>
          <CardColumns>
            <Card border='danger' bg='dark' text='light' style={{width: '25rm'}}>
              <Card.Title>Cities</Card.Title>
          {this.state.campaign.attributes.relations.cities.map(function (city) {
            return [
            <Card.Body>
              <Card.Title>{city.name}</Card.Title>
            </Card.Body>
            ]
          })}
          </Card>
            <Card border='danger' bg='dark' text='light' style={{width: '25rm'}}>
              <Card.Title>Factions</Card.Title>
          {this.state.campaign.attributes.relations.factions.map(function (faction) {
            return [
            <Card.Body>
              <Card.Title>{faction.name}</Card.Title>
            </Card.Body>
            ]
          })}
          </Card>
            <Card border='danger' bg='dark' text='light' style={{width: '25rm'}}>
              <Card.Title>NPCs</Card.Title>
          {this.state.campaign.attributes.relations.npcs.map(function (npc) {
            return [
            <Card.Body>
              <Card.Title>{npc.name}</Card.Title>
            </Card.Body>
            ]
          })}
          </Card>
            <Card border='danger' bg='dark' text='light' style={{width: '25rm'}}>
              <Card.Title>Player Characters</Card.Title>
          {this.state.campaign.attributes.relations.player_characters.map(function (pc) {
            return [
            <Card.Body>
              <Card.Title>{pc.name}</Card.Title>
            </Card.Body>
            ]
          })}
          </Card>
            <Card border='danger' bg='dark' text='light' style={{width: '25rm'}}>
              <Card.Title>Quests</Card.Title>
          {this.state.campaign.attributes.relations.quests.map(function (quest) {
            return [
            <Card.Body>
              <Card.Title>{quest.name}</Card.Title>
            </Card.Body>
            ]
          })}
          </Card>
            <Card border='danger' bg='dark' text='light' style={{width: '25rm'}}>
              <Card.Title>Storylines</Card.Title>
          {this.state.campaign.attributes.relations.storylines.map(function (storyline) {
            return [
            <Card.Body>
              <Card.Title>{storyline.name}</Card.Title>
            </Card.Body>
            ]
          })}
          </Card>
          </CardColumns>
        </Card.Body>
      </Card>
    </center>
    
  )} else {
    return <p>loading</p>
  }
}
}
