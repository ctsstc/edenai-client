/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const InfosSearchDataClass: core.serialization.ObjectSchema<serializers.InfosSearchDataClass.Raw, EdenAi.InfosSearchDataClass>;
export declare namespace InfosSearchDataClass {
    interface Raw {
        object: string;
        document: number;
        score: number;
    }
}