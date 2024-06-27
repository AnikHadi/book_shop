function SideBar() {
  return (
    <div className="flex flex-col gap-y-2 border py-1 px-2">
      <div className="flex flex-col gap-y-1">
        <label for="min_price">Min Price</label>
        <input
          type="number"
          name="min_price"
          id="min_price"
          placeholder="Min Price"
          className="w-[250px] bg-slate-100 focus:outline-none p-1 pl-2 "
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label for="max_price">Max Price</label>
        <input
          type="number"
          name="max_price"
          id="max_price"
          placeholder="Max Price"
          className="w-[250px] bg-slate-100 focus:outline-none p-1 pl-2"
        />
      </div>
    </div>
  );
}

export default SideBar;
