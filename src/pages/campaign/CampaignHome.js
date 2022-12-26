import { Link } from "react-router-dom";
import Heading from "../../components/heading/Heading";
import { PlusIcon } from "../../components/icons/Icons";
import CampaigFeatugeLarge from "../../modules/campaign/CampaigFeatugeLarge";

function CampaignHome() {
  return (
    <div>
      <div className="px-[30px] py-10 mb-10 bg-white rounded-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-[25px]">
            <button className="w-[54px] h-[54px] rounded-full bg-secondary opacity-40 flex justify-center items-center text-white">
              <PlusIcon></PlusIcon>
            </button>
            <div>
              <h2 className="font-semibold text-[22px] text-text1 mb-2">
                Create Your Campaign
              </h2>
              <p className="text-sm font-normal text-text3 mb-2">
                Jump right into our editor and create your first Virtue
                campaign!
              </p>
              <Link className="text-primary font-normal text-sm">
                Need any help? Learn More...
              </Link>
            </div>
          </div>
          <Link to="/start-campaign">
            <button className="font-semibold py-3 px-[30px] text-secondary text-base  bg-[#EEEAFD] border-[#EEEAFD] rounded-[10px] ">
              Create campaign
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-sm py-[10px]">
        <Heading number="4">Your Campaign </Heading>
        <div className="flex flex-col gap-10 pr-[180px]">
          <CampaigFeatugeLarge></CampaigFeatugeLarge>
          <CampaigFeatugeLarge></CampaigFeatugeLarge>
          <CampaigFeatugeLarge></CampaigFeatugeLarge>
        </div>
      </div>
    </div>
  );
}

export default CampaignHome;
