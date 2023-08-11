/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ItemDataExtraction: core.serialization.ObjectSchema<serializers.ItemDataExtraction.Raw, EdenAi.ItemDataExtraction>;
export declare namespace ItemDataExtraction {
    interface Raw {
        key: string;
        value?: unknown;
        bounding_box: serializers.BoundingBox.Raw;
        confidence_score: number;
    }
}