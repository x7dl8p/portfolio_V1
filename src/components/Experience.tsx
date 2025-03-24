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
      <TabsList className="mb-2 grid w-full grid-cols-2 transition-shadow ring-1 ring-primary/20 hover:ring-primary/20 hover:ring-offset-10">
        <TabsTrigger value="work" className="transition-colors hover:bg-primary/5 hover:text-primary">Work</TabsTrigger>
        <TabsTrigger value="education" className="transition-colors hover:bg-primary/5 hover:text-primary">Education</TabsTrigger>
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
