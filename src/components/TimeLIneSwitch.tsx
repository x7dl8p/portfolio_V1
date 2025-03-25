import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import Timeline from "./Timeline";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;

  return (
    <Tabs defaultValue="work">
      <TabsList className="mb-6 grid w-full grid-cols-2 rounded-xl bg-card/60 backdrop-blur-sm ring-1 ring-primary/20 hover:ring-offset-10">
        <TabsTrigger 
          value="work" 
          className="text-base relative border-none text-stone-400 rounded-md after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-primary/80 after:transition-transform data-[state=active]:after:scale-x-100"
        >
          Experience
        </TabsTrigger>
        <TabsTrigger 
          value="education" 
          className="text-base relative border-none text-stone-400 rounded-md after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-primary/80 after:transition-transform data-[state=active]:after:scale-x-100"
        >
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline experience={career}></Timeline>
      </TabsContent>
      <TabsContent value="education">
        <Timeline experience={education}></Timeline>
      </TabsContent>
    </Tabs>
  );
}
