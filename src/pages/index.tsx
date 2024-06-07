import { Landing } from "@/components/landing";
import skillSets from "@/shared/data/skillsets";
import config from "@/shared/data/config";
import { useEffect, useState } from "react";

const Home = () => {
  const { greetings, tags, ...rest } = config;
  const [tag, setTag] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
    setTag(tags[Math.floor(Math.random() * tags.length)]);
  }, [greetings, tags]);

  return (
    <div className="flex flex-col">
      <Landing greeting={greeting} tag={tag} skillSets={skillSets} {...rest} />
    </div>
  );
};

export default Home;
