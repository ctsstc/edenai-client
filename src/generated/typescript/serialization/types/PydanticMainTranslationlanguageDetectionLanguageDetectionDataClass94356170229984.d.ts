/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTranslationlanguageDetectionLanguageDetectionDataClass94356170229984: core.serialization.ObjectSchema<serializers.PydanticMainTranslationlanguageDetectionLanguageDetectionDataClass94356170229984.Raw, EdenAi.PydanticMainTranslationlanguageDetectionLanguageDetectionDataClass94356170229984>;
export declare namespace PydanticMainTranslationlanguageDetectionLanguageDetectionDataClass94356170229984 {
    interface Raw {
        items?: serializers.InfosLanguageDetectionDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
