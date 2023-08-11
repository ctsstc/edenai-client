/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ResumeWorkExp: core.serialization.ObjectSchema<serializers.ResumeWorkExp.Raw, EdenAi.ResumeWorkExp>;
export declare namespace ResumeWorkExp {
    interface Raw {
        total_years_experience: string;
        entries?: serializers.ResumeWorkExpEntry.Raw[] | null;
    }
}