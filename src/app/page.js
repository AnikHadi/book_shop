import AllBooks from "@/components/AllBooks";
import Box from "@/components/Box";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function Home({ searchParams }) {
  console.log(searchParams);
  return (
    <Box>
      <NavBar />
      <div className="mt-4 grid grid-cols-[280px_1fr] gap-x-4">
        <SideBar />
        <AllBooks searchParams={searchParams} />
      </div>
    </Box>
  );
}
