"use client";
import Link from "next/link";
import { useState } from "react";
function NavBar() {
  const [inputSearch, setInputSearch] = useState();
  const handleSearch = () => {
    // updateSearchParameters("name", inputSearch);
  };

  return (
    <div>
      <div className=" flex items-center">
        <input
          type="search"
          placeholder="Search.."
          className="w-[200px] py-0.5 pl-6 bg-slate-100"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link href={`?name=${inputSearch}`}>Search</Link>
      </div>
    </div>
  );
}

export default NavBar;
