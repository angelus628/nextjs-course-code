import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <ul>
        <li><Link href='/portfolio'>Portfolio</Link></li>
        <li><Link href='/clients'>Clients</Link></li>
      </ul>
    </div>
  );
};

export default Home;
