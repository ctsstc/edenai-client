/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const GeneralSentimentEnum: core.serialization.Schema<serializers.GeneralSentimentEnum.Raw, EdenAi.GeneralSentimentEnum>;
export declare namespace GeneralSentimentEnum {
    type Raw = "Positive" | "Negative" | "Neutral";
}