import CampaignCategory from "./CampaignCategory";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

function CampaigFeatugeLarge() {
  return (
    <div className="flex gap-x-[30px] ">
      <div className="w-[582px] h-[266px]">
        <img
          src="https://images.unsplash.com/photo-1670272505391-8efda8e7a99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="py-4">
        <CampaignCategory className="font-semibold text-sm">
          Architecture
        </CampaignCategory>
        <div className="mb-[22px]">
          <CampTitle className="font-bold text-xl mb-[15px]">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="font-normal text-sm ">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
        </div>
        <div className="h-[5px] bg-[#EFEFEF] w-full relative rounded-full overflow-hidden mb-[22px]">
          <span className="h-full inline-block w-[64%] bg-primary absolute top-0 left-0 rounded-full"></span>
        </div>
        <div className="grid grid-cols-3 gap-x-[65px]">
          <CampMeta
            price="$2,000"
            desc="Raised of $2,500"
            size="large"
          ></CampMeta>
          <CampMeta price="173" desc="Total backers" size="large"></CampMeta>
          <CampMeta price="30" desc="Days left" size="large"></CampMeta>
        </div>
      </div>
    </div>
  );
}

export default CampaigFeatugeLarge;
