/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const BoundixBoxOcrTable: core.serialization.ObjectSchema<serializers.BoundixBoxOcrTable.Raw, EdenAi.BoundixBoxOcrTable>;
export declare namespace BoundixBoxOcrTable {
    interface Raw {
        left: number;
        top: number;
        width: number;
        height: number;
    }
}
