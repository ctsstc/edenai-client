/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainOcrbankCheckParsingBankCheckParsingDataClass94356165803488: core.serialization.ObjectSchema<serializers.PydanticMainOcrbankCheckParsingBankCheckParsingDataClass94356165803488.Raw, EdenAi.PydanticMainOcrbankCheckParsingBankCheckParsingDataClass94356165803488>;
export declare namespace PydanticMainOcrbankCheckParsingBankCheckParsingDataClass94356165803488 {
    interface Raw {
        extracted_data?: serializers.ItemBankCheckParsingDataClass.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}