import React from 'react';
import Cookies from "universal-cookie"

const cookies = new Cookies();

const user = cookies.get("user")

class CampaignsView extends React.Component {
  state={
    title:"",
    description:"",
    image:"",
    loading:false
  };

   campaignsList(props) {
    const campaigns = props.campaigns;
    const listItems = campaigns.map((campaign) =>
      <li>{campaign}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  render () {
    return (
      <div class="campaigns-container">
        <this.campaignsList campaigns={user.campaigns} />
      </div>
    )
  };
}

export default CampaignsView;