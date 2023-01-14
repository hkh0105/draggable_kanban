import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Link href='/kanban'>
      <h1>로그인하기</h1>
    </Link>
  );
};

export default Home;
