/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as EdenAi from "..";
export interface FaceAttributes {
    headwear: number;
    frontalGaze: number;
    eyesVisible: number;
    glasses: number;
    mouthOpen: number;
    smiling: number;
    brightness: number;
    sharpness: number;
    pose: EdenAi.VideoFacePoses;
}