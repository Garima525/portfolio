"use client";
import { navItems } from "@/data";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [jsonData, setjsonData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
  const data = await fetch(
  "https://webmanager-lac.vercel.app/subscription-api/get-post/673afd914da5e1400d84bc86?api_key=12345-ABCDE-67890-FGHIJ-KLMNO"
  );
  const result = await data.json();
  console.log("result", result);

  setjsonData(result)
    setTimeout(() => {
      setLoading(false);
      console.log("result", result);
    }, 1000);
  };

  const [jsonProjectData, setjsonProjectData] = useState();
  useEffect(() => {
    fetchProjectData();
  }, []);
  const fetchProjectData = async () => {
  const data = await fetch(
  "https://webmanager-lac.vercel.app/subscription-api/get-all-post/garima_portfolio/projects?api_key=12345-ABCDE-67890-FGHIJ-KLMNO"
  );
  const projectResult = await data.json();
  console.log("Project result", projectResult);

  setjsonProjectData(projectResult)
    setTimeout(() => {
      setLoading(false);
      console.log("projectResult", projectResult);
    }, 1000);
  };

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen bg-white dark:bg-black-100">
        <div className="loader">Loading...</div>
      </main>
    );
  }
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNav navItems={navItems} />
      <Hero data={jsonData}/>
      {/* <Grid /> */}
      <RecentProjects projectData={jsonProjectData} />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </main>
  );
}
