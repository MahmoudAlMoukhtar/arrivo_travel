import BlogShort from "../../../components/BlogShort";
import ContactShort from "../../../components/ContactShort";
import ProgramsBanner from "./ProgramsBanner";
import ProgramsMainBody from "./ProgramsMainBody";

const Programs = ({data}) => {
  return (
    <div id="" className="flex flex-col">
      <ProgramsBanner />
      <ProgramsMainBody data={data} />
      <BlogShort />
      <ContactShort />
    </div>
  );
};

export default Programs;
