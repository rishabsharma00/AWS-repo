const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TravelWithTails - Coming Soon</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #e6e0de;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        .container {
            max-width: 700px;
            padding: 20px;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 15px;
        }

        p {
            font-size: 1.2rem;
            line-height: 1.6;
        }

        .badge {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 25px;
            border: 2px solid white;
            border-radius: 30px;
            font-weight: bold;
            letter-spacing: 2px;
        }

        .footer {
            margin-top: 30px;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🐾 TravelWithTails</h1>

        <p>
            Adventures are better with your furry companions.
            We're building a pet-friendly travel platform to help
            travelers discover destinations, stays, guides, and
            unforgettable experiences for themselves and their pets.
        </p>

        <div class="badge">COMING SOON</div>

        <div class="footer">
            Travel. Explore. Wag. Repeat.
        </div>
    </div>
</body>
</html>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

