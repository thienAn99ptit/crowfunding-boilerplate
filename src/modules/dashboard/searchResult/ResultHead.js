import { CloseIcon } from "../../../components/icons/Icons";

function ResultHead() {
  return (
    <div className="flex justify-between pl-[10px] items-center">
      <span className="font-medium text-sm text-text1">
        See all 10,124 fundraisier
      </span>
      <button className="py-3 px-6 bg-[#F9E3E3] text-error rounded-[10px]">
        <CloseIcon></CloseIcon>
      </button>
    </div>
  );
}

export default ResultHead;
