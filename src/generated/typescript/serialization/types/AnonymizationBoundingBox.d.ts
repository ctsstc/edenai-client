/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const AnonymizationBoundingBox: core.serialization.ObjectSchema<serializers.AnonymizationBoundingBox.Raw, EdenAi.AnonymizationBoundingBox>;
export declare namespace AnonymizationBoundingBox {
    interface Raw {
        x_min: number;
        x_max: number;
        y_min: number;
        y_max: number;
    }
}