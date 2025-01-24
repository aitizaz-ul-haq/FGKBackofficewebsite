//importing instructions data
import instructionsdata from "../data/leftsectionsinstructions.json";

export const LeftSectionsInstructionContainer = () => {
  return (
    <div className="instructions-container">
      {instructionsdata.map((instruct) => (
        <div key={instruct.id} className="instructions-statement font-inter">
          {instruct.instruction}
        </div>
      ))}
    </div>
  );
};
