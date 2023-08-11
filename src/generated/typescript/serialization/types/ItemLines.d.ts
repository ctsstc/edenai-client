/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ItemLines: core.serialization.ObjectSchema<serializers.ItemLines.Raw, EdenAi.ItemLines>;
export declare namespace ItemLines {
    interface Raw {
        description?: string | null;
        quantity?: number | null;
        amount?: number | null;
        unit_price?: number | null;
    }
}