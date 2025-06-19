import SubPagesPointCard from "../../subpagespointcard/subpagespointcard";

export default function SectionLeftList({leftdata}) {
    return(
         <div className="left-list">
          {leftdata.map((lefty) => (
            <SubPagesPointCard
              key={lefty.id}
              advtitle={lefty.advlefttitle}
              advdesc={lefty.advdesc}
              advicon={lefty.advicon}
            />
          ))}
        </div>
    );
}