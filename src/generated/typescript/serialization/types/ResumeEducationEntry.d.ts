/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ResumeEducationEntry: core.serialization.ObjectSchema<serializers.ResumeEducationEntry.Raw, EdenAi.ResumeEducationEntry>;
export declare namespace ResumeEducationEntry {
    interface Raw {
        title: string;
        start_date: string;
        end_date: string;
        location: serializers.ResumeLocation.Raw;
        establishment: string;
        description: string;
        gpa: string;
        accreditation: string;
    }
}