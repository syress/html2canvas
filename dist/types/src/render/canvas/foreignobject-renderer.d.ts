import { RenderOptions } from './canvas-renderer';
export declare class ForeignObjectRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    options: RenderOptions;
    constructor(options: RenderOptions);
    render(element: HTMLElement): Promise<HTMLCanvasElement>;
}
export declare const loadSerializedSVG: (svg: Node) => Promise<HTMLImageElement>;
