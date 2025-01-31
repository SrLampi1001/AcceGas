import os
import mysql.connector

# Configuración de la base de datos MySQL en Hostinger
db_config = {
    "host": 'srv1711.hstgr.io',
    "user": 'u976721805_admin',
    "password": '1036616747Js',
    "database": 'u976721805_products'
}

# Conectar a la base de datos
try:
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    print("Conectado a la base de datos exitosamente.")
except mysql.connector.Error as err:
    print(f"Error al conectar con la base de datos: {err}")
    exit()

# Directorio donde están los productos
productos_dir = "F:/AcceGas/pag/AcceGas/catalogues/img_products";


# Recorrer las carpetas de productos
for folder in os.listdir(productos_dir):
    product_path = os.path.join(productos_dir, folder)

    # Verificar si es una carpeta (producto)
    if os.path.isdir(product_path):
        imagenes = [f"https://accegas.com.co/catalogues/img_products/{folder}/{file}" for file in os.listdir(product_path) if file.endswith(('.jpg', '.jpeg'))]
        while len(imagenes) < 3:
            imagenes.append(None)
        
        # Insertar el producto en la base de datos
        sql = "INSERT INTO products (name, img1, img2, img3) VALUES (%s, %s, %s, %s)"
        values = (folder, str(imagenes[0]), str(imagenes[1]), str(imagenes[2]))  # Convertimos la lista de imágenes en texto

        try:
            cursor.execute(sql, values)
            connection.commit()
            print(f"Producto '{folder}' subido con éxito.")
        except mysql.connector.Error as err:
            print(f"Error al insertar '{folder}': {err}")

# Cerrar la conexión
cursor.close()
connection.close()
print("Conexión cerrada.")
