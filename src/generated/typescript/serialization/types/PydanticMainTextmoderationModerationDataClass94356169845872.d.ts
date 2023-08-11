/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainTextmoderationModerationDataClass94356169845872: core.serialization.ObjectSchema<serializers.PydanticMainTextmoderationModerationDataClass94356169845872.Raw, EdenAi.PydanticMainTextmoderationModerationDataClass94356169845872>;
export declare namespace PydanticMainTextmoderationModerationDataClass94356169845872 {
    interface Raw {
        nsfw_likelihood: number;
        items?: serializers.TextModerationItem.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}