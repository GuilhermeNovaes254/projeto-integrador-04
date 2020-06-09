import requests
import array
from xml.etree import ElementTree

arqEntrada = open('./id.txt')
idGames = arqEntrada.readlines()
lines = len(idGames)

#Abre arquivo de saida
import sys
stdout = sys.stdout
sys.stdout = open('./jogos.txt','w')
array = {}

i = 0
while i < lines :
    url = 'https://boardgamegeek.com/xmlapi/boardgame/'+ idGames[i]
    response = requests.get(url)
    # print(response.content)
    root = ElementTree.fromstring(response.content)

    item = {}

    item = {
        'id': i+4,
        'ano': root[0][0].text,
        'qntMin':root[0][1].text,
        'qntMax':root[0][2].text,
        'duracao':root[0][3].text,
        'faixaEtaria':root[0][6].text,
        'nome':root[0][7].text,
        'descricao':'Descricao',
        'foto': root[0][10].text,
        'aprovado': 1,
        'tema_id': 'TEMA',
        'dominio_id': "DOMINIO",
        'mecanica_id': "MECANICA"

    }
    
    print(item)
    # print(root[0][1].text)
    # print(root[0][2].text)
    # print(root[0][3].text)
    # print(root[0][6].text)
    # print(root[0][7].text)
    # print(root[0][8].text)
    # print(root[0][9].text)
    # print(root[0][10].text)
    # print('\n')
    
    


    i = i + 1

sys.stdout = stdout