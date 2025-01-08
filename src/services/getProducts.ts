import Papa from 'papaparse';

const sheetURL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSg8XR9djnuZTF9heAOt3tyG6ctIC5bi4Lm8XvptU5P1CeAH8yuTq-x3GVsYEQ27Z9LCZfDNjP3K9R9/pub?output=csv'

interface Response {
  nombre: string
  precio: number | string
  stock: number | string
  foto: string | any
  id: string | number
  categoria: string
  descripcion: string
}

export const getProducts = async (): Promise<Response[]> => {
  try {
      const response = await fetch(sheetURL)
      const data = await response.text()
      const parsed = await new Promise<Response[]>((resolve, reject) => {
        Papa.parse<Response>(data, {
          complete: result => resolve(result.data),
          error: reject,
          header: true,
        })
      })
      return parsed
  } catch (error) {
    console.error('Error al obtener los productos:', error)
    throw error
  }
}
