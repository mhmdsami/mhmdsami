import type { NextPage } from 'next'
import { Landing } from "../components";

const Home: NextPage = () => {
  return (
      <div className="flex flex-col">
          <Landing />
      </div>
 )
}

export default Home
