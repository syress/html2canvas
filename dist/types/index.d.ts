import { CloneOptions } from './dom/document-cloner';
import { RenderOptions } from './render/canvas/canvas-renderer';
export declare type Options = CloneOptions & RenderOptions & {
    allowTaint: boolean;
    backgroundColor: string;
    foreignObjectRendering: boolean;
    imageTimeout: number;
    logging: boolean;
    proxy?: string;
    removeContainer?: boolean;
    useCORS: boolean;
};
declare const html2canvas: (element: HTMLElement, options: Options) => Promise<HTMLCanvasElement>;
export default html2canvas;
