/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const LandmarkItem: core.serialization.ObjectSchema<serializers.LandmarkItem.Raw, EdenAi.LandmarkItem>;
export declare namespace LandmarkItem {
    interface Raw {
        description: string;
        confidence: number;
        bounding_box?: serializers.LandmarkVertice.Raw[] | null;
        locations?: serializers.LandmarkLocation.Raw[] | null;
    }
}