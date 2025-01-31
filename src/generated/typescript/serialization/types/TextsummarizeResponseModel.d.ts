/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const TextsummarizeResponseModel: core.serialization.ObjectSchema<serializers.TextsummarizeResponseModel.Raw, EdenAi.TextsummarizeResponseModel>;
export declare namespace TextsummarizeResponseModel {
    interface Raw {
        emvista?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169971440.Raw | null;
        writesonic?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169990304.Raw | null;
        microsoft?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169994016.Raw | null;
        connexun?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169991248.Raw | null;
        cohere?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169962976.Raw | null;
        meaningcloud?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169963920.Raw | null;
        oneai?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169967280.Raw | null;
        openai?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169968224.Raw | null;
        huggingface?: serializers.PydanticMainTextsummarizeSummarizeDataClass94356169997520.Raw | null;
    }
}
