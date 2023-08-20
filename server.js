const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.send('Bem-vindo à floricultura online!');
});

// Rota de funcionalidade
const products = [
    { id: 1, name: 'Peonia', price: 100.00 },
    { id: 2, name: 'Orquídea', price: 100.00 },
    { id: 3, name: 'Protea', price: 200.00 }
  ];

  app.get('/products', (req, res) => {
    res.json(products);
  });

  app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  });

  const cart = [];

app.post('/cart/add/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    cart.push(product);
    res.json({ message: 'Produto adicionado ao carrinho' });
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

app.get('/cart', (req, res) => {
    res.json(cart);
  });

  app.post('/cart/checkout', (req, res) => {

    cart.length = 0; // Esvaziar o carrinho
     res.json({ message: 'Compra finalizada com sucesso' });
   });


// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
