/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const FaceAccessories: core.serialization.ObjectSchema<serializers.FaceAccessories.Raw, EdenAi.FaceAccessories>;
export declare namespace FaceAccessories {
    interface Raw {
        sunglasses: number;
        reading_glasses: number;
        swimming_goggles: number;
        face_mask: number;
        eyeglasses: number;
        headwear: number;
    }
}
