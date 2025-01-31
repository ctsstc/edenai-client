/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 *
 *     Represents a suggestion for a misspelled word.
 *
 *     Args:
 *         suggestion (str): The suggested text.
 *         score (float, optional): The score of the suggested text (between 0 and 1).
 *
 *     Raises:
 *         ValueError: If the score is not between 0 and 1.
 *
 *     Returns:
 *         SuggestionItem: An instance of the SuggestionItem class.
 *
 */
export interface SuggestionItem {
    suggestion: string;
    score: number;
}
