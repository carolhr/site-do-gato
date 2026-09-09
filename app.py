from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
# O CORS permite que o seu site HTML converse com o script Python com segurança
CORS(app)

# Banco de dados administrativo felino
cargos = ["CEO (Chief Executive Meow)", "Diretor de Recursos Humanos (Gatos)", "Gerente de Logística de Sachês", "Analista de Soneca Sênior", "Estagiário de Derrubar Copos"]
departamentos = ["Finanças e Petiscos", "Operações de Arranhar Sofás", "Qualidade do Ronronar", "Vendas de Olhares Fofos"]
metas = ["Dormir 18 horas hoje", "Derrubar 3 canetas da mesa", "Pedir comida 5 minutos após já ter comido", "Arranhar o tapete novo"]

@app.route('/api/contratar', methods=['GET'])
def contratar_gato():
    # Lógica em Python que gera um relatório de contratação administrativa
    salario_petiscos = random.randint(50, 500)
    participacao_lucros = round(salario_petiscos * 0.1, 2)
    
    relatorio_rh = {
        "cargo": random.choice(cargos),
        "departamento": random.choice(departamentos),
        "salario": f"{salario_petiscos} sachês/mês",
        "plr": f"{participacao_lucros} gramas de catnip",
        "meta_do_mes": random.choice(metas)
    }
    return jsonify(relatorio_rh)

if __name__ == '__main__':
    # Roda o servidor local de Python na porta 5000
    app.run(debug=True, port=5000)

# pip install flask flask-cors
