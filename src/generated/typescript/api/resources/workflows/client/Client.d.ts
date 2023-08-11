/**
 * This file was auto-generated by Fern from our API Definition.
 */
/// <reference types="node" />
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as fs from "fs";
import * as EdenAi from "../../..";
export declare namespace Workflows {
    interface Options {
        environment?: core.Supplier<environments.EdenAiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Workflows {
    protected readonly _options: Workflows.Options;
    constructor(_options: Workflows.Options);
    /**
     *
     * Workflow let you create a pipeline of subfeature by inputing an entry data, letting it pass through all the subfeatures and retreiving the result
     *
     *
     * **Note**: You can try Workflow on our [developer portal](https://app.edenai.run/bricks/workflows) and a `description` snippet will automatically get generated as you build your workflow
     *
     * **Example:**
     *
     * Schema: ocr --> automatic_translation --> summarize
     * In this workflow we pass a file as input, ocr parse the text, pass it to translate, and summarize will return a summary of the translated text
     *
     * **Inputs:**
     *
     * Depending on the first subfeature you have three choice for the inital input data: `file`, `text` or `texts`.
     *
     * To create a workflow you have to pass an object to the `description` parameter, the object should look like this:
     *
     *
     * ```
     * [
     *   {
     *     "feature": "ocr",
     *     "subfeature": "ocr",
     *     "params": {
     *       "language": "auto-detect",
     *       "providers": "google"
     *     }
     *   },
     *   {
     *     "feature": "translation",
     *     "subfeature": "automatic_translation",
     *     "params": {
     *       "source_language": "auto-detect",
     *       "target_language": "fr",
     *       "providers": "google"
     *     }
     *   },
     *   {
     *     "feature": "text",
     *     "subfeature": "summarize",
     *     "params": {
     *       "providers": "openai"
     *     }
     *   }
     * ]
     * ```
     *
     * - `description` should be a list of *nodes* each node representing a subfeature.Inside each node, enter the desired feature and subfeature and its params. `params` are the parameters you should normally send to the subfeature as if you were doing a direct call but with a few constraints:
     *     + `providers` should take only one provider name, if you input multiple providers, the response of all the other providers will be ignored
     *     + `file`, `text`, `texts` shouldn't be present in `params` as these are initial inputs
     *
     * **Important!**: description should be sent as a string since the content-type is a form-data
     *
     * - `return_only_last` allows you to chose wether you want a list of all the response returned by each providers or just getting the last response. If set to `true` the response will be the last subfeature result, if set to `false` the reponse will be a list of all subfeature results.
     *
     */
    pipelineCreate(file: File | fs.ReadStream, request: EdenAi.PipelineRequest, requestOptions?: Workflows.RequestOptions): Promise<EdenAi.WorklowResponseType | undefined>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}