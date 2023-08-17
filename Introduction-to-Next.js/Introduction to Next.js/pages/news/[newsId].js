import { useRouter } from "next/router";

function Detailpage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // Send a request to the backend API to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default Detailpage;

// our-domain.com/news/detail
