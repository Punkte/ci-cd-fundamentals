import { NextResponse } from 'next/server';

const mockProducts = [
  // Un produit valide
  { id: 1, name: 'Kebab Sauce Blanche', price: 6.50, inStock: true },
  // Un produit avec un prix invalide (string)
  { id: 2, name: 'Frites', price: 'cher', inStock: true },
  // Un produit sans nom
  { id: 3, price: 1.50, inStock: true },
  // Un autre produit valide
  { id: 4, name: 'Coca-Cola', price: 2.00, inStock: true },
  // Un produit avec un ID invalide (string)
  { id: 'cinq', name: 'Ayran', price: 1.50, inStock: false },
];

export async function GET() {
  return NextResponse.json(mockProducts, {
    headers: {
      "Access-Control-Allow-Origin": '*',
    }
  });
}