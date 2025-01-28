function calculateArea(shape: string, width: number, height?: number): number {
  switch (shape) {
    case "rectangle":
      if(height === undefined){
        throw new Error("Height is required for rectangle");
      }
      return width * height;
    case "triangle":
      if(height === undefined){
        throw new Error("Height is required for triangle");
      }
      return 0.5 * width * height;
    default:
      throw new Error(`Invalid shape: ${shape}`);
  }
}

console.log(calculateArea("rectangle", 10, 5)); // 50
console.log(calculateArea("triangle", 10, 5)); // 25
//console.log(calculateArea("circle", 10)); // throws an error
console.log(calculateArea("rectangle",10)); // throws an error
console.log(calculateArea("triangle",10)); // throws an error