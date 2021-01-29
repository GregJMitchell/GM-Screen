import React from 'react'
import Cookies from "universal-cookie"

const cookies = new Cookies()

const user = cookies.get("user")

export default class CampaignView extends React.Component {

componentDidMount() {
  const campaign = cookies.get('campaigns').find(campaign => campaign.id == this.props.match.params.id)
  console.log(campaign)
}

render() {
  console.log(this.props)
  console.log(this.props.match.params.id)
  return (
    <p>hello</p>
  )
}
}
