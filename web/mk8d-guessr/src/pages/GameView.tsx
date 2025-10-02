import SceneViewer from "../components/SceneViewer";
import CourseDisplay from "../components/CourseDisplay";
import UtilityPanel from "../components/UtilityPanel";

export default function GameView() {
  return (
    <div className="grid grid-cols-[2fr_1fr] grid-rows-[1fr_1fr] h-screen w-screen">
      <div className="col-span-1 row-span-2 bg-gray-900">
        <SceneViewer />
      </div>
      <div className="col-span-1 row-span-1 bg-gray-800 border-b border-gray-700">
        <UtilityPanel />
      </div>
      <div className="col-span-1 row-span-1 bg-gray-700">
        <CourseDisplay />
      </div>
    </div>
  );
}
