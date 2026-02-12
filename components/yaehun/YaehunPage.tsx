import YaehunAbout from "@/components/yaehun/YaehunAbout";
import YaehunContact from "@/components/yaehun/YaehunContact";
import YaehunHero from "@/components/yaehun/YaehunHero";
import YaehunProjects from "@/components/yaehun/YaehunProjects";

export default function YaehunPage() {
  return (
    <div className="bg-white text-slate-900">
      <YaehunHero />
      <YaehunAbout />
      <YaehunProjects />
      <YaehunContact />
    </div>
  );
}
