# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-08-15

### Added
- Initial stable release of Visual Bitcoin Private Key Generator
- 256-bit visual private key generation via 16x16 grid interface
- Random key generation using coin flip mode
- QR code generation for generated addresses (WIF and BTC address)
- Support for custom HEX private key input
- Multiple blockchain explorer links for address verification
- Print/export functionality for generated keys
- Dark mode support
- Progressive Web App (PWA) capabilities with service worker
- Favicon and manifest.json for installable PWA
- YouTube tutorial video links

### Performance & Optimization
- **CDN Integration**: External CDN hosting for JavaScript libraries
- **Subresource Integrity (SRI)**: Added SRI hashes for all CDN resources
- **Lazy Loading**: Added `defer` attribute to all script tags
- **Performance Budget**: Added budget.json for Lighthouse performance tracking
- **Lighthouse CI**: GitHub Actions workflow with Lighthouse audit

### Security
- Content Security Policy meta tag implementation
- HTTPS-only external resource loading
- SRI-enabled CDN script loading with fallback to local files
- Security audit integration in CI/CD workflow

### Accessibility
- Proper ARIA labels for all interactive elements
- Role attributes for semantic HTML structure
- Keyboard navigation support for disabled form elements
- Screen reader support for canvas and outputs

### CI/CD
- **GitHub Actions CI/CD Pipeline**:
  - Automated build on push to main/master/develop branches
  - Pull request validation
  - Release deployment workflow
  - Lighthouse performance auditing
  - Security scanning with Trivy
  - HTML/CSS/JS validation
  - Node.js testing matrix (18, 20, 22)
  - Weekly Lighthouse audit

### Testing
- Created comprehensive test suite (tests/index.spec.html)
- Performance tests
- Accessibility tests
- Functional tests
- Security tests
- SEO tests

### Development
- Added .gitignore for node_modules and build artifacts
- Project structure documentation
- License file (MIT)

## [0.1.0] - 2019-03-01

### Added
- Initial public release by MrFreeDragon
- Basic 16x16 visual Bitcoin private key generator
- BitcoinJS-lib integration
- QR code generation
- WIF format export
- Basic UI/UX design

---

## Changelog for Future Releases

When making changes to this project, follow these guidelines:

### Features
- Add new functionality with `Added` section
- Reference issue numbers if available (e.g., `Added feature X. Resolves #123`)

### Fixes
- Bug fixes go under `Fixed` section
- Reference issues (e.g., `Fixed crash on empty input. Fixes #45`)

### Changes
- Changes to existing functionality go under `Changed`
- Include breaking changes explicitly

### Deprecations
- Mark features for removal with `Deprecated`
- Include removal timeline

### Removals
- Remove features only in major versions
- Document in `Removed` section

### Security
- Security fixes in separate `Security` section

---

## Statistics

- **Total commits**: See git history
- **Contributors**: MrFreeDragon (initial), VisualBTC team
- **License**: MIT
- **Repository**: https://github.com/MrFreeDragon/VisualBTC
