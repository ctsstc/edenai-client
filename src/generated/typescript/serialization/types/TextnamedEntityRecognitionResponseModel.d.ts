/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const TextnamedEntityRecognitionResponseModel: core.serialization.ObjectSchema<serializers.TextnamedEntityRecognitionResponseModel.Raw, EdenAi.TextnamedEntityRecognitionResponseModel>;
export declare namespace TextnamedEntityRecognitionResponseModel {
    interface Raw {
        lettria?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356164966592.Raw | null;
        tenstorrent?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169851600.Raw | null;
        microsoft?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169839552.Raw | null;
        openai?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169840496.Raw | null;
        ibm?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169836464.Raw | null;
        oneai?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169837408.Raw | null;
        google?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169883552.Raw | null;
        neuralspace?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169858144.Raw | null;
        amazon?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169862448.Raw | null;
        "eden-ai"?: serializers.PydanticMainTextnamedEntityRecognitionNamedEntityRecognitionDataClass94356169866752.Raw | null;
    }
}