import Image from "../../components/image/Image";
import images from "../../assets/images";
import { DownIcon, UpLineIcon } from "../../components/icons/Icons";
import Button from "../../components/button/Button";
import DashboardSearch from "./DashboardSearch";

function DashboardHead() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-x-[58px]">
        <Image src={images.Logo} />
        <DashboardSearch />
      </div>
      <div className="flex gap-x-10 items-center">
        <div className="flex justify-center items-center gap-x-2">
          <UpLineIcon />
          <span className="w-max text-base font-semibold text-text2">
            Fundrising for
          </span>
          <DownIcon className="cursor-pointer" />
        </div>
        <Button
          kindOf="secondary"
          type="button"
          className="rounded-lg text-white px-7 py-3 max-w-[192px]"
        >
          Start a campaign
        </Button>
        <div className="w-[52px] h-[52px]">
          <Image
            src={images.Logo}
            className="rounded-full w-full h-full object-cover"
          ></Image>
        </div>
      </div>
    </header>
  );
}

export default DashboardHead;
