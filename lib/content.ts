export const content = `
<h1>Mathematics Notes</h1>
<p>This is a document for taking notes on mathematics topics. You can use the toolbar above to format your text, add images, tables, and mathematical symbols.</p>

<h2>Quadratic Equations</h2>
<p>The standard form of a quadratic equation is:</p>
<div class="bg-gray-50 p-4 rounded-lg my-4 text-center">
ax² + bx + c = 0
</div>

<p>The solutions can be found using the quadratic formula:</p>
<div class="bg-gray-50 p-4 rounded-lg my-4 text-center">
x = (-b ± √(b² - 4ac)) / 2a
</div>

<h3>Example Problem</h3>
<p>Solve the equation: x² + 5x + 6 = 0</p>

<div class="border-l-4 border-blue-500 pl-4 my-4">
<p><strong>Step 1:</strong> Identify the values of a, b, and c.</p>
<p>a = 1, b = 5, c = 6</p>

<p><strong>Step 2:</strong> Substitute these values into the quadratic formula.</p>
<p>x = (-5 ± √(5² - 4×1×6)) / 2×1</p>
<p>x = (-5 ± √(25 - 24)) / 2</p>
<p>x = (-5 ± √1) / 2</p>
<p>x = (-5 ± 1) / 2</p>

<p><strong>Step 3:</strong> Calculate the two solutions.</p>
<p>x = (-5 + 1) / 2 = -4/2 = -2</p>
<p>x = (-5 - 1) / 2 = -6/2 = -3</p>
</div>

<p>Therefore, the solutions to the equation x² + 5x + 6 = 0 are x = -2 and x = -3.</p>

<h2>Trigonometry Formulas</h2>
<p>Here are some important trigonometric identities:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
<div class="bg-gray-50 p-4 rounded-lg">
  <p class="font-medium">Pythagorean Identities</p>
  <p>sin²θ + cos²θ = 1</p>
  <p>tan²θ + 1 = sec²θ</p>
  <p>1 + cot²θ = csc²θ</p>
</div>
<div class="bg-gray-50 p-4 rounded-lg">
  <p class="font-medium">Sum and Difference Formulas</p>
  <p>sin(α + β) = sinα cosβ + cosα sinβ</p>
  <p>cos(α + β) = cosα cosβ - sinα sinβ</p>
</div>
</div>

<h2>Calculus: Derivatives</h2>
<p>The derivative of a function represents its rate of change. Here are some common derivative rules:</p>

<div class="bg-gray-50 p-4 rounded-lg my-4">
<p class="font-medium">Power Rule:</p>
<p>If f(x) = xⁿ, then f'(x) = n·xⁿ⁻¹</p>

<p class="font-medium mt-2">Product Rule:</p>
<p>If h(x) = f(x)·g(x), then h'(x) = f'(x)·g(x) + f(x)·g'(x)</p>

<p class="font-medium mt-2">Chain Rule:</p>
<p>If h(x) = f(g(x)), then h'(x) = f'(g(x))·g'(x)</p>
</div>

<p>Practice applying these rules to solve derivative problems.</p>
`

