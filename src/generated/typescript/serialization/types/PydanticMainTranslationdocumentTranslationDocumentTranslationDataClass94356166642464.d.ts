/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTranslationdocumentTranslationDocumentTranslationDataClass94356166642464: core.serialization.ObjectSchema<serializers.PydanticMainTranslationdocumentTranslationDocumentTranslationDataClass94356166642464.Raw, EdenAi.PydanticMainTranslationdocumentTranslationDocumentTranslationDataClass94356166642464>;
export declare namespace PydanticMainTranslationdocumentTranslationDocumentTranslationDataClass94356166642464 {
    interface Raw {
        file: string;
        document_resource_url: string;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
