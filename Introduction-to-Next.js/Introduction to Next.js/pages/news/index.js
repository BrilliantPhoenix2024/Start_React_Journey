import Link from "next/link";
import { Fragment } from "react";

function Newspage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS is a great Freamework</Link>
        </li>
        <li>
          <Link href="/news/reactjs">ReactJS is a great Library</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Newspage;

// our-domain.com/news
