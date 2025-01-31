/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainVideolabelDetectionAsyncLabelDetectionAsyncDataClass94356170421952: core.serialization.ObjectSchema<serializers.PydanticMainVideolabelDetectionAsyncLabelDetectionAsyncDataClass94356170421952.Raw, EdenAi.PydanticMainVideolabelDetectionAsyncLabelDetectionAsyncDataClass94356170421952>;
export declare namespace PydanticMainVideolabelDetectionAsyncLabelDetectionAsyncDataClass94356170421952 {
    interface Raw {
        labels?: serializers.VideoLabel.Raw[] | null;
        original_response?: unknown | null;
        id: string;
        final_status: serializers.FinalStatusEnum.Raw;
        error?: Record<string, unknown> | null;
    }
}
