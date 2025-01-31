/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const VideoPersonQuality: core.serialization.ObjectSchema<serializers.VideoPersonQuality.Raw, EdenAi.VideoPersonQuality>;
export declare namespace VideoPersonQuality {
    interface Raw {
        brightness: number;
        sharpness: number;
    }
}
