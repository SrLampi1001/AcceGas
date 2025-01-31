import os
import pandas as pd

def crear_catalogo(base_dir, output_file):
    # Lista para almacenar la información del catálogo
    catalogo_data = []

    # Recorre las carpetas en el directorio base
    for elemento in os.listdir(base_dir):
        elemento_path = os.path.join(base_dir, elemento)
        
        if os.path.isdir(elemento_path):
            # Lista de imágenes del elemento
            imagenes = [os.path.join(elemento_path, img) for img in os.listdir(elemento_path) if img.lower().endswith(('.png', '.jpg', '.jpeg'))]
            
            # Agregar la información del elemento al catálogo
            catalogo_data.append({
                'Elemento': elemento,
                'Imagen 1 jpg': imagenes[0] if len(imagenes) > 0 else '',
                'Imagen 1 png': imagenes[1] if len(imagenes) > 1 else '',
                'Imagen 2 jpg': imagenes[2] if len(imagenes) > 2 else '',
                'Imagen 2 png': imagenes[3] if len(imagenes) > 3 else '',
                'Imagen 3 jpg': imagenes[4] if len(imagenes) > 4 else '',
                'Imagen 3 png': imagenes[5] if len(imagenes) > 5 else '',
            })

    # Crear un DataFrame de pandas con la información del catálogo
    catalogo_df = pd.DataFrame(catalogo_data)
    
    # Guardar el DataFrame en un archivo Excel
    catalogo_df.to_excel(output_file, index=False)

# Directorio base donde están las carpetas de los elementos
base_dir = 'E:/proyectos/AcceGas/catalogues/img_products/'
# Nombre del archivo Excel de salida
output_file = 'catalogo.xlsx'

# Crear el catálogo
crear_catalogo(base_dir, output_file)

print(f"Catálogo creado exitosamente en {output_file}")
