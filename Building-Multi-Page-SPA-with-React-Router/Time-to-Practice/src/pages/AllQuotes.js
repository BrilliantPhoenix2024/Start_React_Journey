import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "author-1", text: "text-1" },
  { id: "q2", author: "author-2", text: "text-2" },
  { id: "q3", author: "author-3", text: "text-3" },
  { id: "q4", author: "author-4", text: "text-4" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
