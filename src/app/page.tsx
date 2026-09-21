import Books from "@/Components/Books";
import { Hero } from "@/Components/Hero";
export const dynamic = 'force-dynamic';


export default function Home() {
  return (
   <div>
     <Hero></Hero>
     <Books></Books>
   </div>
  );
}
