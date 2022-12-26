function ResultItem() {
  return (
    <div className="flex gap-x-5 mb-5">
      <div className="w-[50px] h-[50px]">
        <img
          src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      <div>
        <p className="text-sm">
          <strong className="font-medium">Education</strong> fund for Durgham
          Family
        </p>
        <span className="font-normal text-sm">By Durgham Family</span>
      </div>
    </div>
  );
}

export default ResultItem;
