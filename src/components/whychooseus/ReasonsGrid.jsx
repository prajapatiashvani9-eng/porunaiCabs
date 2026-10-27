import { reasons } from "./reasonsData";
import ReasonCard from "./ReasonCard";

function ReasonsGrid() {
  return (
    <div
      className="
        mt-14
        grid
        gap-4
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {reasons.map((reason, index) => (
        <ReasonCard
          key={reason.title}
          reason={reason}
          index={index}
        />
      ))}
    </div>
  );
}

export default ReasonsGrid;