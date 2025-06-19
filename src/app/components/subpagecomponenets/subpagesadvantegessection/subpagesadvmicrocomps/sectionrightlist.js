import SubPagesPointCard from "../../subpagespointcard/subpagespointcard";

export default function SectionRightList({rightdata}) {
    return(
        <div className="right-list">
          {rightdata.map((righty) => (
            <SubPagesPointCard
              key={righty.id}
              advtitle={righty.advrighttitle}
              advdesc={righty.advdesc}
              advicon={righty.advicon}
            />
          ))}
        </div>
    );
}