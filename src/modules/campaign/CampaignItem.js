import CampaignCategory from "./CampaignCategory";
import CategoryContent from "./CategoryContent";

function CampaignItem() {
  return (
    <div className="bg-white rounded-2xl">
      <div className="h-[158px] mb-4">
        <img
          src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>
      <div className="pl-5 pr-9 pb-5">
        <CampaignCategory></CampaignCategory>
        <CategoryContent></CategoryContent>
      </div>
    </div>
  );
}

export default CampaignItem;
