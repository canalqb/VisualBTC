# Guia de Integração - VisualBTC

Este documento fornece diretrizes para integrar o VisualBTC a outros sistemas, serviços e plataformas.

## Tabela de Conteúdo

1. [API](#api)
2. [Integração com Carteiras](#integra%C3%A7%C3%A3o-com-carteiras)
3. [Integração com Exchanges](#integra-%C3%A7%C3%A3o-com-exchanges)
4. [Integração com Services de Blockchain](#integra-%C3%A7%C3%A3o-com-services-de-blockchain)
5. [Integração PWA](#integra-%C3%A7%C3%A3o-pwa)
6. [Desenvolvimento Local](#desenvolvimento-local)
7. [Deploy em Servidor](#deploy-em-servidor)

---

## API

### Endpoint Principal

```
https://btckeygen.com/
```

### Formato de Entrada

O VisualBTC gera chaves no formato:

**Private Key HEX:** 64 caracteres hexadecimais (0-9, A-F)  
**Public Key HEX:** 64 ou 128 caracteres (sem compressão ou com compressão)  
**Address:** Endereço Bitcoin no formato P2PKH

### Exemplo de Uso Programático

```javascript
// Usar via Web Component (iframe)
const iframe = document.createElement('iframe');
iframe.src = 'https://btckeygen.com/index.html';
iframe.style.width = '100%';
iframe.style.height = '800px';
document.getElementById('container').appendChild(iframe);
```

---

## Integração com Carteiras

### Importação de Chaves WIF

O VisualBTC gera chaves no formato **WIF (Wallet Import Format)**, compatível com a maioria das carteiras:

| Carteira | Compatibilidade |
|----------|-----------------|
| Bitcoin Core | ✅ Sim |
| Electrum | ✅ Sim |
| Blockchain.com | ✅ Sim |
| Coinbase | ⚠️ Limitado |
| Binance | ⚠️ Limitado |

### Passos para Importação

1. Clique em **"Make WIF & QR code"** no VisualBTC
2. Copie a chave WIF gerada
3. Na sua carteira, acesse a opção de importação de chave privada
4. Cole a chave WIF e confirme

### Código de Exemplo - Importação

```javascript
// Gerar chave via VisualBTC e exportar
function exportPrivateKey() {
    const wif = document.getElementById('PrivKeyWIF').value;
    const address = document.getElementById('AddressExport').value;
    
    // Este objeto pode ser passado para APIs de carteira
    return {
        wif: wif,
        address: address,
        timestamp: new Date().toISOString()
    };
}
```

---

## Integração com Exchanges

### Endereços para Depósito

O VisualBTC suporta geração de endereços compatíveis com exchanges:

| Exchange | Compatibilidade |
|----------|-----------------|
| Binance | ✅ Sim |
| Coinbase | ✅ Sim |
| Kraken | ✅ Sim |
| Bittrex | ✅ Sim |
| KuCoin | ✅ Sim |

### Fluxo de Integração

1. Gere um novo endereço usando o VisualBTC
2. Use esse endereço como destinatário do depósito
3. Monitore transações via explorer integrado

```javascript
// Exemplo de integração com exchange
class ExchangeIntegration {
    constructor() {
        this.explorers = {
            'binance': 'https://binance.com/address/',
            'coinbase': 'https://exchange.coinbase.com/accounts/'
        };
    }
    
    getDepositAddress(exchange, qrCode) {
        // Usar QR code do VisualBTC
        return {
            address: document.getElementById('BTCaddr').value,
            qr_code: qrCode,
            exchange: exchange
        };
    }
}
```

---

## Integração com Services de Blockchain

### Explorers Suportados

O VisualBTC permite selecionar diferentes exploradores:

```javascript
// Mapeamento de exploradores
const explorers = {
    'btc_com': 'https://btc.com/',
    'blockchair': 'https://blockchair.com/bitcoin/address/',
    'blockcypher': 'https://live.blockcypher.com/btc/address/',
    'blockchain': 'https://www.blockchain.com/btc/address/',
    'viabtc': 'https://explorer.viabtc.com/btc/address/',
    'bitcoin_com': 'https://explorer.bitcoin.com/btc/address/'
};

// Atualizar URL do explorador
function updateExplorer(explorerName) {
    document.getElementById('ExplorerSelect').value = explorers[explorerName];
}
```

### API de Verificação de Saldo

```javascript
// Verificar saldo de um endereço
async function checkBalance(address) {
    const response = await fetch(
        `https://blockchain.info/rawaddr/${address}`
    );
    const data = await response.json();
    return {
        address: address,
        total_received: data.total_received,
        total_sent: data.total_sent,
        final_balance: data.final_balance,
        n_tx: data.n_tx
    };
}
```

---

## Integração PWA

### Manifest.json

O VisualBTC inclui um manifest.json completo para PWA:

```json
{
  "name": "Visual BTC Generator",
  "short_name": "VisualBTC",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFAFA",
  "theme_color": "#FF8000"
}
```

### Service Worker

O arquivo `sw.js` fornece:

- Cache de assets offline
- Estratégia de rede com fallback
- Suporte a notificações push

```javascript
// Registrar service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

### Feature Detection

```javascript
// Verificar suporte PWA
function checkPWASupport() {
    return {
        serviceWorker: 'serviceWorker' in navigator,
        manifest: !!document.head.querySelector('link[rel="manifest"]'),
        standalone: window.navigator.standalone || false,
        beforeinstallprompt: 'beforeinstallprompt' in window
    };
}
```

---

## Desenvolvimento Local

### Pré-requisitos

- Node.js 16+ (opcional, para build)
- Git
- Servidor HTTP local (ou use Live Server do VS Code)

### Setup

```bash
# Clone o repositório
git clone https://github.com/MrFreeDragon/VisualBTC.git
cd VisualBTC

# Servir localmente
npx serve .  # ou use live-server
# Acessar: http://localhost:3000
```

### Estrutura de Desenvolvimento

```
VisualBTC/
├── src/                      # Código fonte
│   ├── js/
│   │   └── visualPrivKeyMain.js
│   └── css/
│       └── visualPrivKey.css
├── dist/                     # Build produção
├── manifest.json
└── sw.js
```

### Task Runner (opcional)

```json
// package.json
{
  "scripts": {
    "dev": "live-server",
    "build": "npm run lint && npm run minify",
    "lint": "eslint src/",
    "minify": "terser js/*.js -o dist/"
  }
}
```

---

## Deploy em Servidor

### Configuração Apache (.htaccess)

```apache
# Redirect www to non-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^(.*)$ https://btckeygen.com/$1 [R=301,L]

# Service Worker
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule index.html / [L]
</IfModule>

# Cache Headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/html "0 hours"
    ExpiresByType text/css "30 days"
    ExpiresByType application/javascript "30 days"
    ExpiresByType image/x-icon "365 days"
</IfModule>
```

### Configuração Nginx

```nginx
server {
    listen 80;
    server_name btckeygen.com www.btckeygen.com;
    return 301 https://btckeygen.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name btckeygen.com;

    root /var/www/btckeygen.com;
    index index.html;

    # Service Worker
    location /sw.js {
        add_header Content-Type application/javascript;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires 0;
    }

    # Manifest
    location /manifest.json {
        add_header Content-Type application/manifest+json;
    }

    # Cache static assets
    location ~* \.(css|js|ico|gif|png|jpg|jpeg|svg)$ {
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

### Headers de Segurança Recomendados

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self';
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

## Testes

### Test Drive

1. Acesse https://btckeygen.com/
2. Clique em "Random Key"
3. Verifique os dados gerados:
   - Private Key (BIN/HEX)
   - Public Key
   - Bitcoin Address
   - QR Code

### Testes automatizados

```bash
# Executar testes
npm test

# Testes de segurança
npm run security-scan
```

---

## Suporte

### Documentação Completa

- [GitHub Repository](https://github.com/MrFreeDragon/VisualBTC)
- [Project Discussion](https://bitcointalk.org/index.php?topic=5187401.0)

### Contato

- **Issues:** https://github.com/MrFreeDragon/VisualBTC/issues
- **Email:** mrdragon@example.com (substituir por contato real)

### Donações

Este projeto é mantido do zero. Contribuições são bem-vindas:

**Endereço Bitcoin:** `1SoDn3auKHVwmQKRaBgkPk2hMmXzCMcPw`