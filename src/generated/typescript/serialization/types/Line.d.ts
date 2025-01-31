/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const Line: core.serialization.ObjectSchema<serializers.Line.Raw, EdenAi.Line>;
export declare namespace Line {
    interface Raw {
        text: string;
        words?: serializers.Word.Raw[] | null;
        bounding_box: serializers.BoundingBox.Raw;
        confidence: number;
    }
}
