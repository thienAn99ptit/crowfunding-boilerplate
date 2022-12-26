import { SearchIcon } from "../../components/icons/Icons";
import DashSearchResult from "./searchResult/DashSearchResult";

function DashboardSearch() {
  return (
    <div className="relative">
      <div className="w-[458px] h-[52px] flex relative rounded-full bg-white border border-strock pl-6 pr-2">
        <div className="flex-1 h-full">
          <input
            type="text"
            className="w-full h-full outline-none rounded-full text-sm font-normal placeholder:text-text4 text-text3"
            placeholder="Do fundrise now"
          />
        </div>
        <div className="h-full py-2 w-[72px]">
          <button className="rounded-full bg-primary text-white px-2 h-full w-full  flex justify-center items-center">
            <SearchIcon className="text-xs"></SearchIcon>
          </button>
        </div>
      </div>
      {/* <div className="absolute left-0 top-full translate-y-5 z-50">
        <DashSearchResult></DashSearchResult>
      </div> */}
    </div>
  );
}

export default DashboardSearch;
