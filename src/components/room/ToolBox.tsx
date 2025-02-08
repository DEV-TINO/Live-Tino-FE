import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faArrowLeft, faArrowRight, faEraser, faPencil, faMicrophone, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import useDrawingStore from "../../stores/drawingStore";
import useLiveRoomStore from "../../stores/liveRoomStore";

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
  const { isMute, setMute, liveRoomMode } = useLiveRoomStore();

  const getButtonClass = (value: string): string => {
    return tool === value ? "text-gray-950" : "text-gray-400 hover:bg-gray-100";
  };

  const isEraser = (value: string) => {
    if (value === "Eraser" || value === "Pencil") {
      setTool(value);
    }
  };

  const toggleMute = () => {
    setMute(!isMute);
  };

  const getMicrophoneIcon = (): IconDefinition => {
    return isMute ? faMicrophoneSlash : faMicrophone;
  };

  return (
    <div className="w-full flex justify-center gap-2">
      <div className="rounded bg-white flex gap-2 p-2 z-10">
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
      {liveRoomMode === "create" && (
        <div className="rounded bg-white flex gap-2 p-2 z-20">
          <div onClick={toggleMute} className="rounded h-8 w-8 flex items-center justify-center cursor-pointer text-gray-400 hover:bg-gray-100">
            <FontAwesomeIcon icon={getMicrophoneIcon()} size="lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawingTool;