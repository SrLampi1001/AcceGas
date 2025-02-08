from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import os
app = Flask(__name__)
CORS(app)
# Configuración de MySQL
db = mysql.connector.connect(
    host = os.getenv("mysql.railway.internal"), 
    user = os.getenv("root"),
    password = os.getenv("ZQJtheOlDkhZqUCZeJVhfKzPrPSEzkXx"),
    database = os.getenv("railway"),
    port = os.getenv("3306")
)

# Ruta para obtener los productos
@app.route('/api/productos', methods=['GET'])
def obtener_productos():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)
        
        # Obtener productos de la base de datos
        cursor.execute("SELECT Name, Price, img1, img2, img3, ID_producto FROM products")
        productos = cursor.fetchall()

        cursor.close()
        connection.close()

        return jsonify(productos)  # Devuelve los productos en formato JSON

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

# Iniciar el servidor en http://localhost:5000
if __name__ == '__main__':
    app.run(debug=True)
