# Modifications for SP Build

1. **Set Calculation for REM Values**

   - **Description**: This step involves adjusting the `calc` function to incorporate a variable basis for REM values.
   - **Regex Pattern**: `calc\(([0-9.]+)rem\s`
   - **Replacement**: Transform the pattern to `calc(($1 * var(--rem-basis,1rem)) ` to ensure that REM values are dynamically calculated based on the `--rem-basis` variable.

2. **Set Fonts Dependent Fields**

   - **Description**: Adjust font-related properties to be dynamically calculated based on the `--int-font-base` variable.
   - **Regex Pattern**: `(font-size|line-height|-fs):\s*([0-9.]+)rem;`
   - **Replacement**: Transform the pattern to `$1: calc($2 * var(--int-font-base,1rem));`

3. **Get All REM Values Not in Variables and Formulas**

   - **Description**: Identify and adjust standalone REM values that are not part of variables or formulas.
   - **Regex Pattern**: `([0-9.]+)rem(?![])])`
   - **Replacement**: Transform the pattern to `calc($1 * var(--rem-basis,1rem))`

4. **Get All Values in Brackets - Most in @apply Rules**

   - **Description**: Identify REM values within brackets, primarily found in `@apply` rules, and determine the appropriate transformation.
   - **Regex Pattern**: `(\[)([0-9.]+)rem(\])`
   - **Replacement**: //figure out what we want to do here

## Files to check and decide what we want to do with them

- divider.css
- radio.css
- rating.css
- select.css
- toggle.css
- tooltip.css
- checkbox.css
- label.css
- mockup.css

---

This is just some code to save for reference

([a-zA-Z-]+:\s\*)([0-9.]+)rem;

([0-9.]+)rem;
calc($1 \* var(--rem-basis,1rem));

calc\(([0-9.]+)rem
calc(($1 \* var(--rem-basis,1rem))

//just rem
([0-9.]+)rem
//not match closing peren
([0-9.]+)rem(?!\))
calc($1 \* var(--rem-basis,1rem))

//replace all the remaining standalone rems
([0-9.]+)rem
calc($1 \* var(--rem-basis,1rem))

//replace any rems that are not in calcs
packages/daisyui/src/_/diff.css 3
packages/daisyui/src/_/range.css 2
packages/daisyui/src/\*/tooltip.css 4
