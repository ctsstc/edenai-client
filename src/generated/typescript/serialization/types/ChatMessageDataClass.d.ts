/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ChatMessageDataClass: core.serialization.ObjectSchema<serializers.ChatMessageDataClass.Raw, EdenAi.ChatMessageDataClass>;
export declare namespace ChatMessageDataClass {
    interface Raw {
        role: string;
        message: string;
    }
}
