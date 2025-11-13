declare module 'trianglify' {
  interface TrianglifyOptions {
    noiseIntensity?: number;
    cell_size?: number;
    variance?: number;
    x_colors?: string | string[];
    y_colors?: string | string[];
  }

  interface TrianglifyPattern {
    dataUrl?: string;
    svg?: SVGElement;
    toCanvas?: () => HTMLCanvasElement;
  }

  class Trianglify {
    constructor(options?: TrianglifyOptions);
    generate(width: number, height: number): TrianglifyPattern;
  }

  export default Trianglify;
  export { Trianglify };
}

