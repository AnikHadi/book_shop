import { fetchData } from "@/lib/utils";
import SingleBook from "./SingleBook";

async function AllBooks({ searchParams }) {
  let url = `http://192.168.0.157:8000/books/?page=1`;
  if (searchParams?.name) {
    url += `&name=${searchParams.name}`;
  }
  const fetchBookData = await fetchData(url);
  return (
    <div className="flex items-center flex-wrap gap-x-4">
      {fetchBookData?.books.map((book, index) => {
        return <SingleBook key={index} book={book} />;
      })}
    </div>
  );
}

export default AllBooks;
