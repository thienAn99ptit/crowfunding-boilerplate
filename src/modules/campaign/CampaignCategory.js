import { FolderIcon } from "../../components/icons/Icons";

function CampaignCategory({ children, className = "font-normal  text-xs" }) {
  return (
    <div
      className={`flex gap-x-2 mb-[15px] text-text3 items-start ${className}`}
    >
      <FolderIcon />
      <span>{children}</span>
    </div>
  );
}

export default CampaignCategory;
