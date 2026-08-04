# Studio DM — Vitória Moraes

Site institucional em Next.js para apresentação do Studio DM, seus serviços e conversão de visitas em conversas pelo WhatsApp. O projeto evita publicar como reais informações ainda não verificadas.

## Tecnologias

Next.js App Router, TypeScript, Tailwind CSS 4, Lucide React, Metadata API, JSON-LD e Google Places API (New).

## Executar

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

Copie `.env.example` para `.env.local` e preencha somente valores reais. `NEXT_PUBLIC_SITE_URL` deve conter a URL final sem barra no fim.

## Conteúdo

- Dados comerciais: `src/config/business.ts`
- Serviços: `src/data/services.ts`
- Portfólio: `src/data/portfolio.ts`
- Perguntas frequentes: `src/data/faq.ts`
- Imagens autorizadas: `public/images/portfolio/`

Cada item de portfólio exige `usageAuthorized: true`, dimensões e texto alternativo. Gere AVIF/WebP a partir dos originais autorizados e remova metadados pessoais antes da publicação. A imagem do hero é editorial gerada para ambientação e não representa o espaço real nem um trabalho realizado. O retrato em `public/images/vitoria/` foi preparado a partir de uma imagem fornecida e autorizada pela proprietária em 04/08/2026.

## Google Places API (New)

1. No Google Cloud, ative Places API (New) e faturamento.
2. Restrinja a chave à API e aos ambientes do projeto.
3. Use Text Search (New) para buscar `Studio DM Vitória Moraes` em `Itapecerica da Serra, SP`.
4. Confira manualmente nome e endereço antes de escolher o Place ID.
5. Defina `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID` somente no servidor/Vercel.
6. Defina os links públicos de mapa e avaliações.

A aplicação usa FieldMask, não envia a chave ao navegador, não persiste avaliações e exibe fallback quando a API não está configurada. Consulte as políticas atuais da Google Maps Platform antes da publicação.

## Analytics e Search Console

Defina `NEXT_PUBLIC_GA_MEASUREMENT_ID` apenas depois de revisar consentimento e política de privacidade. Defina `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` para validar o Search Console. Envie `/sitemap.xml` após conectar o domínio.

## Publicação na Vercel

Importe o repositório, configure as variáveis de ambiente, execute o build e conecte o domínio em Settings > Domains. Depois, valide `/robots.txt`, `/sitemap.xml`, dados estruturados no Rich Results Test e desempenho no Lighthouse.

## Informações que a proprietária precisa confirmar antes da publicação

- Horários de atendimento
- E-mail e razão social, se aplicáveis
- Place ID correto para a integração automática (o identificador público no Maps é `/g/11zh6z643c`)
- Técnicas específicas, duração, manutenção, preços e formas de pagamento
- Política de atrasos e cancelamentos
- Histórico profissional e certificações documentadas
- Fotografias adicionais, em arquivos originais, para ampliar o portfólio autorizado
- URL/domínio oficial

## Checklist antes da publicação

- Rodar lint, typecheck e build
- Conferir todos os CTAs do WhatsApp no celular
- Validar endereço, horários e NAP em todas as páginas
- Confirmar direitos de uso de cada imagem
- Conferir avaliações e atribuições do Google
- Testar teclado, foco, contraste, menu mobile e redução de movimento
- Validar metadata, Open Graph, sitemap, robots e JSON-LD
- Configurar consentimento caso scripts opcionais sejam ativados
- Executar Lighthouse em produção
