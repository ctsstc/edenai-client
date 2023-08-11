/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as EdenAi from "../../../../../api";
import * as core from "../../../../../core";
export declare const AudiotextToSpeechTextToSpeechRequest: core.serialization.Schema<serializers.AudiotextToSpeechTextToSpeechRequest.Raw, EdenAi.AudiotextToSpeechTextToSpeechRequest>;
export declare namespace AudiotextToSpeechTextToSpeechRequest {
    interface Raw {
        providers: string;
        fallback_providers?: string | null;
        response_as_dict?: boolean | null;
        attributes_as_list?: boolean | null;
        show_original_response?: boolean | null;
        settings?: Record<string, string | null | undefined> | null;
        text: string;
        language?: string | null;
        option?: serializers.AudiotextToSpeechTextToSpeechRequestOption.Raw | null;
        rate?: number | null;
        pitch?: number | null;
        volume?: number | null;
        audio_format?: string | null;
        sampling_rate?: number | null;
    }
}