/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as EdenAi from "..";
export interface PydanticMainOcrocrAsyncOcrAsyncDataClass94356166160160 {
    rawText: string;
    /** List of pages */
    pages?: EdenAi.Page[];
    /** Number of pages in the document */
    numberOfPages: number;
    originalResponse?: unknown;
    id: string;
    finalStatus: EdenAi.FinalStatusEnum;
    error?: Record<string, unknown>;
}
