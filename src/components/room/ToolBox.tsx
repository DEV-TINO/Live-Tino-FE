import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faArrowLeft, faArrowRight, faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import useDrawingStore from "../../stores/drawingStore";

type TToolIcon = {
  icon: IconDefinition;
  label: string;
};

const ICONS: TToolIcon[] = [
  { icon: faPencil, label: "Pencil" },
  { icon: faEraser, label: "Eraser" },
  { icon: faArrowLeft, label: "Undo" },
  { icon: faArrowRight, label: "Redo" },
];

const DrawingTool = () => {
  const { tool, setTool } = useDrawingStore();

  const getButtonClass = (value: string): string => {
    return tool === value ? "text-gray-950" : "text-gray-400 hover:bg-gray-100";
  };

  const isEraser = (value: string) => {
    if (value === "Eraser" || value === "Pencil") {
      setTool(value);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="rounded bg-white flex gap-2 p-2 z-20">
        {ICONS.map(({ icon, label }, index) => (
          <div
            key={index}
            className={`rounded h-8 w-8 flex items-center justify-center cursor-pointer ${getButtonClass(label)}`}
            title={label}
            onClick={() => isEraser(label)}
          >
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawingTool;