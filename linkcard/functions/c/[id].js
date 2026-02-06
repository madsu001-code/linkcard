export async function onRequest({ params, request }) {
  const id = params.id;

  const pageUrl = new URL(request.url).toString();
  const imgUrl =
    "https://placehold.co/1200x630/png?text=OGP+" + id;

  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>カード ${id}</title>

<meta property="og:title" content="カード ${id}">
<meta property="og:description" content="これはOGPテストです">
<meta property="og:image" content="${imgUrl}">
<meta property="og:url" content="${pageUrl}">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
</head>

<body>
<h1>OGPカード ${id}</h1>
<p>これはSNSが読むページです。</p>
<a href="/go/${id}">開く</a>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}
