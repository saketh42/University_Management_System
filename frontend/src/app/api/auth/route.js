export async function POST(req) {
    const { email, password } = await req.json();
  
    if (email === "admin@example.com" && password === "password") {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
  
    return new Response(JSON.stringify({ success: false }), { status: 401 });
  }
  