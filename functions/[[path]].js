export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = 'https://api.deepseek.com' + url.pathname + url.search;
  
  const headers = new Headers(context.request.headers);
  headers.set('Host', 'api.deepseek.com');
  
  const response = await fetch(targetUrl, {
    method: context.request.method,
    headers: headers,
    body: context.request.body
  });
  
  const newResponse = new Response(response.body, response);
  newResponse.headers.set('Access-Control-Allow-Origin', '*');
  
  return newResponse;
}
