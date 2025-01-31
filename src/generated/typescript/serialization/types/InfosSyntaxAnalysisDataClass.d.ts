/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const InfosSyntaxAnalysisDataClass: core.serialization.ObjectSchema<serializers.InfosSyntaxAnalysisDataClass.Raw, EdenAi.InfosSyntaxAnalysisDataClass>;
export declare namespace InfosSyntaxAnalysisDataClass {
    interface Raw {
        word: string;
        importance: number;
        tag: string;
        lemma: string;
        others?: Record<string, unknown> | null;
    }
}
