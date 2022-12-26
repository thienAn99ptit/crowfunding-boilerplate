import Heading from "../../components/heading/Heading";
import CampaigFeatugeLarge from "../../modules/campaign/CampaigFeatugeLarge";
import CampaignGroup from "../../modules/campaign/CampaignGroup";

function DashboardHome() {
  return (
    <div>
      <div className="mb-[30px] pr-[180px]">
        <Heading number="4">Your Campaign</Heading>
        <CampaigFeatugeLarge></CampaigFeatugeLarge>
      </div>
      <CampaignGroup head="Popular Campaign"></CampaignGroup>
      <CampaignGroup head="Recent Campaign"></CampaignGroup>
    </div>
  );
}

export default DashboardHome;
