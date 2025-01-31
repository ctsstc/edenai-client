/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const FaceOcclusions: core.serialization.ObjectSchema<serializers.FaceOcclusions.Raw, EdenAi.FaceOcclusions>;
export declare namespace FaceOcclusions {
    interface Raw {
        eye_occluded: boolean;
        forehead_occluded: boolean;
        mouth_occluded: boolean;
    }
}
