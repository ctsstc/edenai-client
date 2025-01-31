/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const LandmarkVertice: core.serialization.ObjectSchema<serializers.LandmarkVertice.Raw, EdenAi.LandmarkVertice>;
export declare namespace LandmarkVertice {
    interface Raw {
        x: number;
        y: number;
    }
}
