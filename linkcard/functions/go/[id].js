export async function onRequest({ params }) {
  const id = params.id;

  const target = "https://example.com";

  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Open</title>
<style>
body{
  margin:0;
  height:100vh;
  display:grid;
  place-items:center;
  background:#000;
}
.btn{
  width:120px;
  height:120px;
  border-radius:999px;
  border:0;
  background:rgba(255,255,255,.15);
  cursor:pointer;
}
.tri{
  width:0;height:0;
  border-left:40px solid white;
  border-top:25px solid transparent;
  border-bottom:25px solid transparent;
  margin-left:10px;
}
</style>
</head>
<body>
<button class="btn" onclick="location.href='${target}'">
  <div class="tri"></div>
</button>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}
