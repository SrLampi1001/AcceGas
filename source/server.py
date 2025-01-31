from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# Configuración de MySQL
db_config = {
    "host": 'srv1711.hstgr.io',
    "user": 'u976721805_admin',
    "password": '1036616747Js',
    "database": 'u976721805_products'
}

# Ruta para obtener los productos
@app.route('/api/productos', methods=['GET'])
def obtener_productos():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)
        
        # Obtener productos de la base de datos
        cursor.execute("SELECT Name, Amount, img1, img2, img3 FROM products")
        productos = cursor.fetchall()

        cursor.close()
        connection.close()

        return jsonify(productos)  # Devuelve los productos en formato JSON

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

# Iniciar el servidor en http://localhost:5000
if __name__ == '__main__':
    app.run(debug=True)
