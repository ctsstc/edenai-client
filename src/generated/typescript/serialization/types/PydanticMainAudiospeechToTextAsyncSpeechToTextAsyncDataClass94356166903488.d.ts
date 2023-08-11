/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainAudiospeechToTextAsyncSpeechToTextAsyncDataClass94356166903488: core.serialization.ObjectSchema<serializers.PydanticMainAudiospeechToTextAsyncSpeechToTextAsyncDataClass94356166903488.Raw, EdenAi.PydanticMainAudiospeechToTextAsyncSpeechToTextAsyncDataClass94356166903488>;
export declare namespace PydanticMainAudiospeechToTextAsyncSpeechToTextAsyncDataClass94356166903488 {
    interface Raw {
        text: string;
        diarization: serializers.SpeechDiarization.Raw;
        original_response?: unknown | null;
        id: string;
        final_status: serializers.FinalStatusEnum.Raw;
        error?: Record<string, unknown> | null;
    }
}