import { useDrawingStore } from "../../stores/drawingStore";

const DrawingTool = () => {
  const { color, thickness, transparency, setColor, setThickness, setTransparency } = useDrawingStore();
  const colors: string[] = [
    "#FFFFFF", "#FFFB53", "#FEEA00", "#FFCD90", "#EF9E00",
    "#FF7201", "#D80104", "#FE0194", "#F25B79", "#CE0047",
    "#B5057F", "#5F147D", "#011989", "#0145A0", "#0096D0",
    "#0097E6", "#55B72B", "#02793A", "#00685C", "#C8C11A",
    "#B64F1F", "#67250E", "#7F8187", "#020001"
  ];

  const getColor = (colorOption: string) => {
    return color === colorOption ? 'border border-gray-800' : 'border';
  };

  const getThicknessBorder = (size: number) => {
    return thickness === size ? 'border-gray-800' : '';
  };

  const getThicknessBackground = (size: number) => {
    return thickness === size ? 'bg-gray-800' : '';
  };

  return (
    <div className="rounded-md border grid grid-cols-[24px_220px_24px_1fr_24px] xl:grid-cols-[12px_340px_12px_1fr_12px] 2xl:grid-cols-[24px_340px_24px_1fr_24px] items-center py-4">
      <div></div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <div>Color</div>
          <div className="w-12 h-6 rounded-md border border-gray-800" style={{ backgroundColor: color }}></div>
        </div>
        <div className="rounded-md grid grid-cols-6 gap-1 xl:grid-cols-12">
          {colors.map((colorOption, index) => (
            <div
              key={index}
              className={`h-8 w-8 xl:w-6 xl:h-6 rounded ${getColor(colorOption)}`}
              style={{ backgroundColor: colorOption }}
              onClick={() => setColor(colorOption)}
            ></div>
          ))}
        </div>
      </div>
      <div></div>
      <div className="flex flex-col xl:flex-row gap-2 xl:gap-3 2xl:gap-6 w-full justify-center items-center">
        <div className="flex flex-col gap-2 w-full max-w-64">
          <div>Thickness</div>
          <div className="bg-gray-50 rounded w-full h-[50px] xl:h-[52px] flex justify-between p-4 items-center">
            {Array.from({ length: 5 }).map((_, index) => {
              const size = (index + 1) * 4;
              return (
                <div
                  key={index}
                  className={`group w-8 h-8 border border-gray-300 hover:border-gray-400 rounded-full flex items-center justify-center ${getThicknessBorder(size)}`}
                  onClick={() => setThickness(size)}
                >
                  <div
                    className={`group-hover:bg-gray-400 bg-gray-300 rounded-full ${getThicknessBackground(size)}`}
                    style={{ width: size, height: size }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-64">
          <div>Opacity</div>
          <div className="bg-gray-50 rounded w-full h-[50px] xl:h-[52px] flex items-center gap-2 p-4 justify-center">
            <div className="min-w-8 h-8 border border-gray-300 rounded-full"></div>
            <input
              type="range"
              value={transparency}
              min="0"
              max="100"
              className="w-full h-1.5 appearance-none bg-gray-300 rounded-full accent-gray-400"
              onChange={(e) => setTransparency(Number(e.target.value))}
            />
            <div className="min-w-8 h-8 border border-gray-300 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingTool;