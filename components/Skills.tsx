import SkillTree from "./SkillTree";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
        <SkillTree />
      </div>
    </section>
  );
};

export default Skills;
