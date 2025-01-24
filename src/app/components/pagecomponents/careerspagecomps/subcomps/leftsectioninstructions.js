// importing sub componenets
import { LeftSectionLogo } from "./leftsectionlogo";
import { LeftSectionHeading } from "./leftsectionheading";
import { LeftSectionsInstructionContainer } from "./leftsectionsinstructionscontainer";

export const LeftSectionInstruction = () => {
  return (
    <div className="left-section-instructions">
      <LeftSectionLogo />
      <LeftSectionHeading />
      <LeftSectionsInstructionContainer />
    </div>
  );
};
