function CampMeta({ price = "$2,000", desc, size = "small" }) {
  return (
    <div>
      <p
        className={`${
          size === "small" ? "font-semibold text-sm" : " font-bold text-xl"
        }`}
      >
        {price}
      </p>
      <span
        className={`text-text4 font-normal ${
          size === "small" ? "text-xs " : "text-sm"
        }`}
      >
        {desc}
      </span>
    </div>
  );
}

export default CampMeta;
