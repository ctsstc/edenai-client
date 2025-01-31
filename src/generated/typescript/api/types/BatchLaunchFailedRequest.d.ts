/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface BatchLaunchFailedRequest {
    /** Request name, if any were given */
    name: string;
    /** Request ID */
    publicId: number;
    /** Parameters passed to the request */
    body: Record<string, unknown>;
    /** Error received from the request validator */
    errors: Record<string, unknown>;
}
