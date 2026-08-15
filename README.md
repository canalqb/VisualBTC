# VisualBTC

Visual bitcoin private key generator. The square 16x16 is used for generation purposes, where each cell is one bit - 0 or 1. Make your visual drawings or use the generator in coin mode just fllipping the coin and fill the corresponding cell depending on the coin outcome.

## 📊 Project Information

**Author:** MrFreeDragon  
**Version:** 1.0  
**License:** MIT  
**Website:** https://btckeygen.com/  
**GitHub:** https://github.com/MrFreeDragon/VisualBTC  

## 🎯 Description

VisualBTC é um gerador de chave privada Bitcoin totalmente baseado em JavaScript que roda no cliente (browser). Ele permite que você gere chaves privadas através de uma interface visual 16x16, onde cada célula representa um bit (0 ou 1).

### Funcionalidades Principais

- **Geração Visual:** Crie chaves privadas através de desenhos ou padrões visuais
- **Modo Moeda:** Gere chaves aleatoriamente flipando "moedas" virtuais
- **QR Code:** Gera códigos QR para chaves privadas e endereços
- **Validação Online:** Verifique o histórico de transações de endereços
- **Exportação:** Salve suas chaves em formato WIF com QR codes impressos

## 🚀 Demo Online

👉 **https://btckeygen.com/**

## 📁 Project Structure

```
VisualBTC/
├── index.html               → Main HTML file with the objects and references to scripts and styles
├── manifest.json            → PWA manifest for installability
├── sw.js                    → Service Worker for offline support
├── robots.txt               → SEO robots configuration
├── favicon.ico              → Favicon for the application
├── css/
│   └── visualPrivKey.css    → Stylesheet
├── js/
│   ├── visualPrivKeyMain.js → Main script with canvas calculations and object functions
│   ├── bitcoinJS-lib.js     → BitcoinJS-lib v0.1.3-default (ECDSA formulas)
│   └── QRcode.js            → QR Code Generator for JavaScript
└── info.txt                 → Detailed project documentation
```

## 💡 How It Works

### The 16x16 Grid

O quadrado 16x16 (=256 bits) é usado para geração de propósitos, onde cada célula representa um bit. A ideia é que a célula preenchida representa o bit "1", e uma célula vazia representa o bit "0".

### Use Cases

1. **Visual Keys:** Crie chaves privadas com desenhos, logotipos ou figuras que podem ser facilmente memorizadas por humanos
2. **Coin Mode:** Gere chaves aleatoriamente usando apenas uma moeda física real
3. **Pattern Keys:** Desenvolva padrões e designs personalizados para suas chaves

## 🔧 Installation

### Local Installation

```bash
# Clone the repository
git clone https://github.com/MrFreeDragon/VisualBTC.git
cd VisualBTC

# Open in browser
open index.html
```

### PWA Installation

O aplicativo pode ser instalado como PWA (Progressive Web App):
1. Acesse https://btckeygen.com/ no navegador Chrome, Edge ou Firefox
2. Clique no ícone "Instalar" na barra de endereços
3. O aplicativo será instalado e funcionará offline

## 🛠️ Technical Details

### Browser Requirements

- JavaScript ES6+ support
- Canvas API
- QR Code Generation
- Service Worker support (for PWA)

### Security Notes

- **All cryptography is done client-side** - your private keys never leave your browser
- No server-side processing or data storage
- Recommended to disconnect from internet and use offline for maximum security
- For real currency storage, use a physical coin and fill all 256 bits manually

### Address Types Supported

- Legacy (Uncompressed)
- Legacy (Compressed)

### Explorers Integration

O aplicativo suporta múltiplos exploradores de blockchain:
- BTC.com (padrão)
- Blockchair.com
- BlockCypher.com
- Blockchain.com
- ViaBTC.com
- Bitcoin.com

## 📚 Documentation

### Video Tutorials

- [Private Key Generation with Coin](https://www.youtube.com/watch?v=WyBdYhwweaE)
- [Funny Pattern Private Key](https://www.youtube.com/watch?v=0Ug4YBEyRFQ)

### Detailed Information

Veja o arquivo `info.txt` para documentação completa sobre:
- Formato de chave privada Bitcoin
- Geração de chave com moeda física
- Modos avançados de preenchimento
- Opções de verificação online
- Segurança

## 🌐 SEO Features

This project includes:
- Open Graph tags for social media sharing
- Meta viewport for mobile responsiveness
- PWA manifest for installability
- Service Worker for offline support
- Proper charset and language attributes

## 📝 Roadmap

- [ ] Mobile app via Capacitor/Cordova
- [ ] Dark mode support
- [ ] Multiple language support
- [ ] Wallet import/export functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details.

## 💰 Donations

Esse projeto é mantido do zero e é gratuito. Se você deseja contribuir:

**Endereço Bitcoin:** `1SoDn3auKHVwmQKRaBgkPk2hMmXzCMcPw`

---

**Security Warning:** This tool is for educational purposes and creating keys for small gifts. For real money storage, use established wallet solutions.