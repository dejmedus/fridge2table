
import fsPromises from 'fs/promises';
import path from 'path'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data/recipes.json');
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return;
  }
}
