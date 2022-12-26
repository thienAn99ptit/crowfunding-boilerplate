import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

function CategoryContent() {
  return (
    <div>
      <CampTitle> Powered Kits Learning Boxes</CampTitle>
      <CampDesc>
        Fun, durable and reusable boxes with eco-friendly options.
      </CampDesc>
      <div className="flex justify-between mb-5">
        <CampMeta price="$2,000" desc="Raised of $1,900" size="small" />
        <CampMeta price="173" desc="Total backers" size="small" />
      </div>
      <div className="flex gap-x-2 items-center">
        <img
          src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="w-8 h-8 object-cover rounded-full"
        />
        <p className="text-text3 text-xs">
          by{" "}
          <strong className="font-semibold text-text2">Mahfuzul Nabil</strong>
        </p>
      </div>
    </div>
  );
}

export default CategoryContent;
