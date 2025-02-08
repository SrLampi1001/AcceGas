from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import os
app = Flask(__name__)
CORS(app)
# Configuración de MySQL
MYSQL_HOST = os.getenv("mysql-zpqo.railway.internal", "localhost") 
MYSQL_USER = os.getenv("root", "root")
MYSQL_PASSWORD = os.getenv("riOZglwvwKLLPxLPcBUgBchSfhYoVOac", "riOZglwvwKLLPxLPcBUgBchSfhYoVOac")
MYSQL_DATABASE = os.getenv("railway", "test")
MYSQL_PORT = os.getenv("3306", "3306")
try:
    db = mysql.connector.connect(
    host = MYSQL_HOST,
    user = MYSQL_USER,
    password = MYSQL_PASSWORD,
    database = MYSQL_DATABASE,
    port = MYSQL_PORT
    ) 
    print("conexion exitosa")
except mysql.connector.Error as err:
    print(f"Error de conexion: {err}")
    
# Ruta para obtener los productos
@app.route('/api/productos', methods=['GET'])
def obtener_productos():
    try:
        cursor = db.cursor(dictionary=True)
        # Obtener productos de la base de datos
        cursor.execute("SELECT * FROM products")
        productos = cursor.fetchall()
        cursor.close()
        return jsonify(productos)  # Devuelve los productos en formato JSON

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

# Iniciar el servidor en http://localhost:5000
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
