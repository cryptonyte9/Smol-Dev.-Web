# Next.js Website with Tailwind and BRC721 Token Interaction

This project is a Next.js website styled with Tailwind CSS. It features an Inscribe button and a Mint button for interacting with BRC721 tokens on the Bitcoin blockchain.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Components

- `InscribeButton`: This button is used to inscribe data onto a BRC721 token.
- `MintButton`: This button is used to mint a new BRC721 token.

## Blockchain Interaction

The website interacts with the Bitcoin blockchain using the BRC721 token standard. The interaction logic is contained in the `brc721.js` file.

## Styling

The website is styled using Tailwind CSS. Global styles are defined in `globals.css`, and component-specific styles are defined in `InscribeButton.module.css` and `MintButton.module.css`.

## Environment Variables

Environment variables are stored in the `.env.local` file. Be sure to update this file with your own values before running the project.

## Dependencies

Project dependencies are listed in the `package.json` file.

## PostCSS Configuration

The PostCSS configuration is contained in the `postcss.config.js` file.

## Ignored Files

Files that should be ignored by Git are listed in the `.gitignore` file.