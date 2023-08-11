/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ImagegenerationResponseModel: core.serialization.ObjectSchema<serializers.ImagegenerationResponseModel.Raw, EdenAi.ImagegenerationResponseModel>;
export declare namespace ImagegenerationResponseModel {
    interface Raw {
        stabilityai?: serializers.PydanticMainImagegenerationGenerationDataClass94356165012880.Raw | null;
        deepai?: serializers.PydanticMainImagegenerationGenerationDataClass94356165043872.Raw | null;
        openai?: serializers.PydanticMainImagegenerationGenerationDataClass94356165047040.Raw | null;
    }
}