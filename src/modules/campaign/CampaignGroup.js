import Heading from "../../components/heading/Heading";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";

function CampaignGroup({ head }) {
  return (
    <div className="mb-[30px]">
      <Heading>{head}</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem key={index}></CampaignItem>
          ))}
      </CampaignGrid>
    </div>
  );
}

export default CampaignGroup;
