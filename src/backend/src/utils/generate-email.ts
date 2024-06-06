export function generateEmail(userId: any, research: any) {
    return `<!DOCTYPE html>
    <html lang="pt">
    <head>
    <meta charset="UTF-8">
    <title>Pesquisa de Satisfação</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }
        .container {
            text-align: center;
        }
        .button {
            padding: 10px 20px;
            margin: 5px;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
        }
        .btn-1 { background-color: #FF0000; }
        .btn-2 { background-color: #FF3300; }
        .btn-3 { background-color: #FF6600; }
        .btn-4 { background-color: #FF9900; }
        .btn-5 { background-color: #FFCC00; }
        .btn-6 { background-color: #FFFF00; }
        .btn-7 { background-color: #B8D334; }
        .btn-8 { background-color: #78B833; }
        .btn-9 { background-color: #3A9D23; }
        .btn-10 { background-color: #008000; }
    </style>
    </head>
    <body>
    
    <div class="container">
        <h1>${research.title}</h1>
        <p>Queremos ouvir sua opinião para melhorar nossos serviços.</p>
        <h1>De 0 a 10, qual a probabilidade de você recomendar nossos serviços para um amigo?</h1>
        <a href="http://localhost:3000/research/vote/${userId}/0" class="button btn-1">0</a>
        <a href="http://localhost:3000/research/vote/${userId}/1" class="button btn-1">1</a>
        <a href="http://localhost:3000/research/vote/${userId}/2" class="button btn-2">2</a>
        <a href="http://localhost:3000/research/vote/${userId}/3" class="button btn-3">3</a>
        <a href="http://localhost:3000/research/vote/${userId}/4" class="button btn-4">4</a>
        <a href="http://localhost:3000/research/vote/${userId}/5" class="button btn-5">5</a>
        <a href="http://localhost:3000/research/vote/${userId}/6" class="button btn-6">6</a>
        <a href="http://localhost:3000/research/vote/${userId}/7" class="button btn-7">7</a>
        <a href="http://localhost:3000/research/vote/${userId}/8" class="button btn-8">8</a>
        <a href="http://localhost:3000/research/vote/${userId}/9" class="button btn-9">9</a>
        <a href="http://localhost:3000/research/vote/${userId}/10" class="button btn-10">10</a>
    </div>
    
    </body>
    </html>`
}