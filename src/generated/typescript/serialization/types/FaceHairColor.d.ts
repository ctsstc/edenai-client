/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const FaceHairColor: core.serialization.ObjectSchema<serializers.FaceHairColor.Raw, EdenAi.FaceHairColor>;
export declare namespace FaceHairColor {
    interface Raw {
        color: string;
        confidence: number;
    }
}