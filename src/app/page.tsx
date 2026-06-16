import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import { createClient } from "./utils/supabaseClient";
import CourseGrid from "@/components/CourseGrid";
import ActivityCard from "@/components/ActivityCard";


export default async function Home() {
  const supabase=createClient();

  const { data: courses } = await supabase.from("courses").select("*");

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="grid grid-cols-12 gap-4">
        
        {/* Sidebar */}
        <aside className="col-span-3 bg-zinc-900 rounded-xl p-4">
          <Sidebar/>
        </aside>

        {/* Main Content */}
        <section className="col-span-9 space-y-4">
          <div className="bg-zinc-900 rounded-xl p-6">
            <Hero/>
          </div>

          <CourseGrid courses={courses}/>
          <ActivityCard />
        </section>
      </div>
    </main>
  );
}
