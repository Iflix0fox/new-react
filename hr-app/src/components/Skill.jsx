import { useState } from "react";

const Skill = ({ skills }) => {
  // console.log("skills is working", skills);
  // console.log(skills.length);

  let [skillList, setskillList] = useState(skills);
  console.log(skillList);
  console.log(skillList.length);

  let commaList = skillList.join(", ");
  console.log("commaList: ", commaList);
  return (
    <>
      <p>skill: {commaList} </p>
    </>
  );
};

export default Skill;
