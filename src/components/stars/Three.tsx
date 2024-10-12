import { EmptyStar, FilledStar } from "../svgs/starIcons";

const Three = () => {
  return (
    <div className="flex items-center space-x-2">
      <FilledStar />
      <FilledStar />
      <FilledStar />
      <EmptyStar />
      <EmptyStar />
    </div>
  );
};

export default Three;
