import { corsHeaders } from '../_shared/cors.ts';

console.log("Hello from Calculation!")

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  try {
    const { lhs, opertaor, rhs } = await req.json();

    const leftOperand = parseFloat(lhs);
    const rightOperand = parseFloat(rhs);

    let result;

    switch (opertaor) {
      case "+":
        result = leftOperand + rightOperand;
        break;
      case "-":
        result = leftOperand - rightOperand;
        break;
      case "*":
        result = leftOperand * rightOperand;
        break;
      case "/":
        result = leftOperand / rightOperand;
        break;
      default:
        result = "Invalid operator"; // Handle invalid operator case
    }

    return new Response(JSON.stringify({ result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})

