/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const TextmoderationResponseModel: core.serialization.ObjectSchema<serializers.TextmoderationResponseModel.Raw, EdenAi.TextmoderationResponseModel>;
export declare namespace TextmoderationResponseModel {
    interface Raw {
        clarifai?: serializers.PydanticMainTextmoderationModerationDataClass94356169828800.Raw | null;
        openai?: serializers.PydanticMainTextmoderationModerationDataClass94356169845872.Raw | null;
        google?: serializers.PydanticMainTextmoderationModerationDataClass94356169911248.Raw | null;
        microsoft?: serializers.PydanticMainTextmoderationModerationDataClass94356169804624.Raw | null;
    }
}
