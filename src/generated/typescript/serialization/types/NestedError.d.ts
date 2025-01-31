/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const NestedError: core.serialization.ObjectSchema<serializers.NestedError.Raw, EdenAi.NestedError>;
export declare namespace NestedError {
    interface Raw {
        type: string;
        message: string;
    }
}
