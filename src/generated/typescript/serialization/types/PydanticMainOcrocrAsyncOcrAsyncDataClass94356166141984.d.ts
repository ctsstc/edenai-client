/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainOcrocrAsyncOcrAsyncDataClass94356166141984: core.serialization.ObjectSchema<serializers.PydanticMainOcrocrAsyncOcrAsyncDataClass94356166141984.Raw, EdenAi.PydanticMainOcrocrAsyncOcrAsyncDataClass94356166141984>;
export declare namespace PydanticMainOcrocrAsyncOcrAsyncDataClass94356166141984 {
    interface Raw {
        raw_text: string;
        pages?: serializers.Page.Raw[] | null;
        number_of_pages: number;
        original_response?: unknown | null;
        id: string;
        final_status: serializers.FinalStatusEnum.Raw;
        error?: Record<string, unknown> | null;
    }
}