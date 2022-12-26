import ReletedSearchs from "./ReletedSearchs";
import ResultHead from "./ResultHead";
import ResultItem from "./ResultItem";

function DashSearchResult() {
  return (
    <div className="search-result  w-[843px] max-h-[598px] bg-white rounded-[20px] ">
      {/* head */}
      <div className="p-[10px] mb-5">
        <ResultHead></ResultHead>
      </div>
      {/* body */}
      <div className="px-[25px] pb-[25px]">
        <div>
          <ResultItem></ResultItem>
          <ResultItem></ResultItem>
          <ResultItem></ResultItem>
          <ResultItem></ResultItem>
          <ResultItem></ResultItem>
        </div>
        <ReletedSearchs></ReletedSearchs>
      </div>
    </div>
  );
}

export default DashSearchResult;
