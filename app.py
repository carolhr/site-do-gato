# ==============================================================================
# 💡 CONTEXTO ADMINISTRATIVO / INSIGHT DE BI (POWER BI)
# Este arquivo cria uma API corporativa em Python para simular a gestão de RH.
# Ele foi projetado para rodar localmente e coletar dados no arquivo 'contratos_felinos.csv'.
# Esses dados podem ser importados para o Power BI para análises de indicadores (KPIs).
# 
# NOTA DE PRODUÇÃO: Para fins de publicação gratuita no GitHub Pages (site online 24/7),
# a lógica de sorteio foi migrada para o arquivo 'script.js'. Mantenha este arquivo
# como documentação de arquitetura de dados e para testes locais integrados!
# ==============================================================================


from flask import Flask, jsonify
from flask_cors import CORS
import random
import csv
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Banco de dados administrativo felino
cargos = ["CEO (Chief Executive Meow)", "Diretor de Recursos Humanos (Gatos)", "Gerente de Logística de Sachês", "Analista de Soneca Sênior", "Estagiário de Derrubar Copos"]
departamentos = ["Finanças e Petiscos", "Operações de Arranhar Sofás", "Qualidade do Ronronar", "Vendas de Olhares Fofos"]
metas = ["Dormir 18 horas hoje", "Derrubar 3 canetas da mesa", "Pedir comida 5 minutos após já ter comido", "Arranhar o tapete novo"]

# Nome do arquivo de tabela que o Power BI vai ler
ARQUIVO_CSV = "contratos_felinos.csv"

def salvar_em_csv(dados):
    # Verifica se o arquivo já existe para sabermos se precisamos escrever o cabeçalho (títulos das colunas)
    arquivo_existe = os.path.exists(ARQUIVO_CSV)
    
    # Abre o arquivo no modo 'a' (append), que adiciona linhas no final sem apagar o que já existe
    with open(ARQUIVO_CSV, mode='a', newline='', encoding='utf-8') as arquivo:
        colunas = ["Data_Contratacao", "Cargo", "Departamento", "Salario_Saches", "PLR_Gramas", "Meta_KPI"]
        escritor = csv.DictWriter(arquivo, fieldnames=colunas)
        
        # Se o arquivo for novo, cria a primeira linha com os títulos das colunas
        if not arquivo_existe:
            escritor.writeheader()
            
        # Escreve os dados do gatinho na tabela
        escritor.writerow(dados)

@app.route('/api/contratar', methods=['GET'])
def contratar_gato():
    salario_petiscos = random.randint(50, 500)
    participacao_lucros = round(salario_petiscos * 0.1, 2)
    
    # Coleta a data e hora exata do momento da contratação
    data_atual = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # 1. Dicionário com os dados limpos para salvar no arquivo do Power BI (sem textos como "sachês/mês")
    dados_tabela = {
        "Data_Contratacao": data_atual,
        "Cargo": random.choice(cargos),
        "Departamento": random.choice(departamentos),
        "Salario_Saches": salario_petiscos,
        "PLR_Gramas": participacao_lucros,
        "Meta_KPI": random.choice(metas)
    }
    
    # Executa a função que grava a linha no arquivo CSV
    salvar_em_csv(dados_tabela)
    
    # 2. Retorna a resposta visual formatada para o seu site em JavaScript continuar exibindo bonito
    relatorio_rh = {
        "cargo": dados_tabela["Cargo"],
        "departamento": dados_tabela["Departamento"],
        "salario": f"{dados_tabela['Salario_Saches']} sachês/mês",
        "plr": f"{dados_tabela['PLR_Gramas']} gramas de catnip",
        "meta_do_mes": dados_tabela["Meta_KPI"]
    }
    return jsonify(relatorio_rh)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
